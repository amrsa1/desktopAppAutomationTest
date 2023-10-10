class DataProvider {
    setNewRandomNo(max: number) {
        return Math.floor(Math.random() * max + 1).toString();
    }

    getRandomString(length: number) {
        const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
        let string = '';
        for (let i = 0; i < length; i++) {
            string += characters.charAt(Math.floor(Math.random() * characters.length));
        }
        return string;
    }

    generateRandomStringWithNumber() {
        const randomString = this.getRandomString(5);
        const randomNo = this.setNewRandomNo(9000);
        return `${randomString} ${randomNo}`;
    }

    generateNoteTitle() {
        const randomStringWithNumber = this.generateRandomStringWithNumber();
        return `WindowsApp automationTest ShowCase - ${randomStringWithNumber}`;
    }

    generateNoteBody() {
        const randomStringWithNumber = this.generateRandomStringWithNumber();
        return `Amr, This is a note body text - ${randomStringWithNumber}`;
    }
}

export default new DataProvider();
