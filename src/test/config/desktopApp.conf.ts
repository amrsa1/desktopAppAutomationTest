import caps from "../utils/caps"
import { config } from './shared.conf'

exports.config = {
    ...config,
    ...{

        specs: [
            'src/test/specs/winAppSuite.ts',
        ],
        capabilities: {
            "appium:path": '/wd/hub',
            "appium:port": 4723,
            "appium:hostname": '127.0.0.1',
            "appium:app": "C:\\Program Files (x86)\\Evernote\\Evernote.exe",
            "appium:platformName": "windows",
            "appium:deviceName": "WindowsPC",
            "ms:waitForAppLaunch": '20',
        },
        services: [['appium', {
            args: {
                debugLogSpacing: true,
                sessionOverride: true,
                address: 'localhost',
                port: 4723,
                hostname: "127.0.0.1",
                relaxedSecurity: true
            }
        }
        ]]
    }

}