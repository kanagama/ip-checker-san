const fs = require('fs');
const IpChecker = require('../src/ipcheckersan');

describe('ipcheckerkun', () => {
    const ipChecker = new IpChecker();

    it('completed()', async() => {
        expect(await ipChecker.completed()).toBe(true);
    });

    it('ip()', async () => {
        expect(ipChecker.ip()).toBeTruthy();
    });

    it('hostname()', async () => {
        const hostname = ipChecker.hostname();
        const timezone = ipChecker.timezone();

        // hostname はローカルの場合取得できるが、github actions の場合取得できない
        expect((hostname !== undefined || timezone === 'America/Chicago')).toBe(true);
    });

    it('city()', async () => {
        expect(ipChecker.city()).toBeTruthy();
    });

    it('region()', async () => {
        expect(ipChecker.region()).toBeTruthy();
    });

    it('country()', async () => {
        expect(ipChecker.country()).toBeTruthy();
    });

    it('location()', async () => {
        expect(ipChecker.location()).toBeTruthy();
    });

    it('latitude()', async () => {
        expect(ipChecker.latitude()).toBeTruthy();
    });

    it('longitude()', async () => {
        expect(ipChecker.longitude()).toBeTruthy();
    });

    it('organization()', async () => {
        expect(ipChecker.organization()).toBeTruthy();
    });

    it('postcode()', async () => {
        expect(ipChecker.postcode()).toBeTruthy();
    });

    it('timezone()', async () => {
        const timezone = ipChecker.timezone();

        expect(timezone).toBeTruthy();
        // ローカルでのテスト、もしくはgithub actions でのテスト
        expect((timezone === 'Asia/Tokyo' || timezone === 'America/Chicago')).toBe(true);
    });

    it('all()', async () => {
        expect(ipChecker.all()).toBeTruthy();
    });
});
