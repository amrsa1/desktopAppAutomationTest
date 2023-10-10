import AllureReporter from '@wdio/allure-reporter';
import desktopApp from '../pages/desktopApp';
import dataProvider from '../utils/dataProvider';


describe('Desktop App Test Suite Example 2', () => {

    after(async () => {
        desktopApp.signOutFromApp('desktoptest@mailna.co')
    });

    it('01. Should be able to add new note', async () => {
        AllureReporter.addSeverity('critical')
        AllureReporter.addStory('As a user i should be able to login with valid credential')
        AllureReporter.addStep('Check if logged user button is disabled')
        await desktopApp.verifyDashBoardIsLoaded()
        await desktopApp.createNewNote(dataProvider.generateNoteTitle(), dataProvider.generateNoteBody())
    });

});
