import { IpInfo } from './interfaces/ipinfoInterface';

import * as fetch from 'isomorphic-fetch';

/**
 * @class
 */
class IpCheckerSan
{
  /**
   * @type boolean
   */
  private fetchCompleted: boolean;

  /**
   * @type string
   */
  private ipAddress: string;

  /**
   * @type string
   */
  private hostName: string;

  /**
   * @type string
   */
  private cityName: string;

  /**
   * @type string
   */
  private regionName: string;

  /**
   * @type string
   */
  private countryName: string;

  /**
   * @type string
   */
  private coordinate: string;

  /**
   * @type string
   */
  private coordinateLatitude: string

  /**
   * @var string
   */
  private coordinateLongitude: string;

  /**
   * @var string
   */
  private organizationName: string;

  /**
   * @type string
   */
  private postalCode: string;

  /**
   * @type string
   */
  private timeZone: string;

  /**
   * @type IpInfo
   */
  private ipInfo: IpInfo;

  /**
   * @constructor
   */
  constructor()
  {
    this.fetchCompleted = false;

    fetch('https://ipinfo.io?callback')
      .then(res => res.json())
      .then(json => {
        const ipInfo = json as IpInfo;

        this.ipAddress        = ipInfo.ip;
        this.hostName         = ipInfo.hostname;
        this.cityName         = ipInfo.city;
        this.regionName       = ipInfo.region;
        this.countryName      = ipInfo.country;
        this.coordinate       = ipInfo.loc;
        this.organizationName = ipInfo.org;
        this.postalCode       = ipInfo.postal;
        this.timeZone         = ipInfo.timezone;
        this.ipInfo           = ipInfo;

        [
          this.coordinateLatitude,
          this.coordinateLongitude,
        ] = ipInfo.loc.split(",");

        this.fetchCompleted = true;
      });
  }

  /**
   * IPアドレスを取得
   *
   * @method
   *
   * @returns {string | null}
   */
  public ip(): string | null {
    if (!this.completed()) {
      return null;
    }

    return this.ipAddress;
  }

  /**
   * ホストネームを取得
   *
   * @method
   * @public
   *
   * @returns {string | null}
   */
  public hostname(): string | null {
    if (!this.completed()) {
      return null;
    }

    return this.hostName;
  }

  /**
   * 市区町村を取得
   *
   * @method
   * @public
   *
   * @returns {string | null}
   */
  public city(): string | null {
    if (!this.completed()) {
      return null;
    }

    return this.cityName;
  }

  /**
   * 地域を取得
   *
   * @method
   * @public
   *
   * @returns {string | null}
   */
  public region(): string | null {
    if (!this.completed()) {
      return null;
    }

    return this.regionName;
  }

  /**
   * @method
   * @public
   *
   * @returns {string | null}
   */
  public country(): string | null {
    if (!this.completed()) {
      return null;
    }

    return this.countryName;
  }

  /**
   * @method
   * @public
   *
   * @returns {string | null}
   */
  public location(): string | null {
    if (!this.completed()) {
      return null;
    }

    return this.coordinate;
  }

  /**
   * @method
   * @public
   *
   * @returns {string | null}
   */
  public latitude(): string | null {
    if (!this.completed()) {
      return null;
    }

    return this.coordinateLatitude;
  }

  /**
   * @method
   * @public
   *
   * @returns {string | null}
   */
  public longitude(): string | null {
    if (!this.completed()) {
      return null;
    }

    return this.coordinateLongitude;
  }

  /**
   * @method
   * @public
   *
   * @returns {string | null}
   */
  public organization(): string | null {
    if (!this.completed()) {
      return null;
    }

    return this.organizationName;
  }

  /**
   * @method
   * @public
   *
   * @returns {string | null}
   */
  public postcode(): string | null {
    if (!this.completed()) {
      return null;
    }

    return this.postalCode;
  }

  /**
   * @method
   * @public
   *
   * @returns {string | null}
   */
  public timezone(): string | null {
    if (!this.completed()) {
      return null;
    }

    return this.timeZone;
  }

  /**
   * @method
   * @public
   *
  * @returns {IpInfo}
   */
  public all(): IpInfo {
    if (!this.completed()) {
      return null;
    }

    return this.ipInfo;
  }

  /**
   * @method
   * @private
   *
   * @return {Promise<boolean>}
   */
  private async completed(): Promise<boolean> {
    let counter: number = 1;
    while (!this.fetchCompleted) {
      await new Promise(resolve => {
        setTimeout(resolve, 100);
      });

      counter++;
      if (counter === 10) {
        return false;
      }
    }

    return true;
  }
}

module.exports = IpCheckerSan;
