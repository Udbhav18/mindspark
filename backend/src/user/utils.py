from selenium.webdriver import Firefox as driver
from selenium.webdriver.firefox.options import Options
from selenium.webdriver.support.ui import Select
from selenium.common.exceptions import NoSuchElementException

from time import sleep

opts = Options()
opts.set_headless()
assert opts.headless  # Operating in headless mode

STATE = 'UTTAR PRADESH'.upper()
DISTRICT = 'LUCKNOW'.upper()
AADHAAR = '000000000000'

def in_disability_db(state: str, district: str, aadhaar: str):
    state, district = state.upper(), district.upper()
    browser = driver(options=opts)
    browser.get('http://www.swavlambancard.gov.in/pwd/searchapplication')

    dropdown_replies = {
            'state_id': state,
            'district_id': district,
            }

    form_replies = {
            'aadhar_or_other_option': aadhaar,
            }

    for form, value in form_replies.items():
        form_field = browser.find_element_by_id(form)
        form_field.send_keys(value)

    for dropdown, value in dropdown_replies.items():
        while True:
            try:
                dropdown_field = Select(browser.find_element_by_id(dropdown))
                dropdown_field.select_by_visible_text(value)
            except NoSuchElementException:
                sleep(0.5)
            else:
                break;


    # Choose aadhaar and not beneficiary id
    browser.find_element_by_xpath('/html/body/div/div[2]/div/div[2]/div/div/div[2]/div/div/form/div/ul/li[3]/div/div[1]/div/label[3]/input').click()
    browser.find_element_by_xpath('/html/body/div/div[2]/div/div[2]/div/div/div[2]/div/div/form/div/ul/li[4]/div/div/div/input').click()

    try:
        'not found' in browser.find_element_by_class_name('errorMessage').text
        return False
    except NoSuchElementException:
        return True
    finally:
        browser.close()

if __name__ == '__main__':
    disabled = in_disability_db(
                state=STATE,
                district=DISTRICT,
                aadhaar=AADHAAR,
                )
    
    print(f'DISABLED: {disabled}')

