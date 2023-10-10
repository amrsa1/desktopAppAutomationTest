import AllureReporter from '@wdio/allure-reporter'

class DesktopApp {

    /* =====================================================================  ELEMENTS ============================================================================== */


    get userNameInput() { return $('~qa-CLIENT_LOGIN_USERNAME') }
    get contButton() { return $('~loginButton') }
    get passInput() { return $('~qa-CLIENT_LOGIN_PASSWORD') }
    get searchInput() { return $('~qa-NOTES_HEADER') }
    get createNewNoteButton() { return $('//Text[@Name="Create new note"]') }
    get titleInput() { return $('//Document/Edit[@Name="Title"]') }
    get file() { return $('//MenuItem[@Name="File"]') }
    get quite() { return $('//MenuItem[@Name="Quit Evernote"]') }
    signOut(email: string) { return $(`//MenuItem[@Name="Sign out ${email}"]`) }
    get signOutButton() { return $('~qa-LOGOUT_BACKUP_DIALOG_SUBMIT') }
    get exitAnyWay() { return $('~qa-LOGOUT_CONFIRM_DIALOG_SUBMIT') }
    get bodyInput() { return $('//Text[@Name="Start writing, drag files or start from a template"]') }
    noteBody(note: string) { return $(`//Edit[@Name="${note}"]`)}



    /* ========================================================================= ACTIONS ================================================================================ */


    async loginToDesktopApp(username: string, password: string) {
        AllureReporter.addStep('Login with valid credential')
        await this.userNameInput.waitForDisplayed({ timeout: 5000 })
        await this.userNameInput.setValue(username)
        await this.contButton.waitForEnabled()
        await this.contButton.click()
        await this.passInput.waitForDisplayed()
        await this.passInput.setValue(password)
        await this.contButton.click()
        await browser.pause(1700)
        return this;
    }

    async verifyDashBoardIsLoaded() {
        AllureReporter.addStep('Wait for dashboard to be loaded')
        await this.createNewNoteButton.waitForDisplayed({ timeout: 20000 })
        return this;
    }

    async createNewNote(title: string, body: string) {
        AllureReporter.addStep('Creat new note')
        await this.createNewNoteButton.click()
        await this.titleInput.waitForDisplayed()
        await this.titleInput.waitForEnabled()
        await this.titleInput.setValue(title)
        await this.bodyInput.click()
        await this.bodyInput.setValue(body)
        return this;
    }

    async signOutFromApp(email: string) {
        AllureReporter.addStep('Click signout from file item in menu')
        await this.file.click()
        await this.signOut(email).waitForDisplayed()
        await this.signOut(email).click()
        try {
            await this.exitAnyWay.waitForDisplayed()
            await this.exitAnyWay.click()
            await driver.pause(1500)
        } catch {
            await this.signOutButton.waitForDisplayed()
            await this.signOutButton.click()
            await driver.pause(1500)
        }
        return this;
    }








}

export default new DesktopApp();
