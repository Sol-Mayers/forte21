export default class GetDateTime {
    date = new Date();

    getFullDate() {
        return this.date;
    }

    getCurrentDay() {
        return String(this.date.getDate()).length < 2
            ? "0" + this.date.getDate()
            : this.date.getDate();
    }

    getCurrentMounth() {
        return String(this.date.getMonth()).length < 2
            ? "0" + String(Number(this.date.getMonth() + 1))
            : String(Number(this.date.getMonth() + 1));
    }

    getCurrentHour() {
        return String(this.date.getHours()).length < 2
            ? "0" + this.date.getHours()
            : this.date.getHours();
    }

    getCurrentMinute() {
        return String(this.date.getMinutes()).length < 2
            ? "0" + this.date.getMinutes()
            : this.date.getMinutes();
    }

    getCurrentTime() {
        return this.getCurrentHour() + ":" + this.getCurrentMinute();
    }

    getCurrentDateTime() {
        return (
            this.getCurrentDay() +
            "." +
            this.getCurrentMounth() +
            "." +
            this.date.getFullYear() +
            " " +
            this.getCurrentTime()
        );
    }
}
