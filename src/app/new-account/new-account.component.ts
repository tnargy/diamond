import { Component } from '@angular/core';
import { LoggingService } from '../logging.service';
import { AccountService } from '../accounts.service';

@Component({
  selector: 'app-new-account',
  templateUrl: './new-account.component.html',
  styleUrls: ['./new-account.component.css'],
  providers: [LoggingService]
})
export class NewAccountComponent {
  constructor(
    private loggingService: LoggingService,
    private accountServer: AccountService
  ) {}

  onCreateAccount(accountName: string, accountStatus: string) {
    this.accountServer.addAccount(accountName, accountStatus);
    this.loggingService.logStatusChange(accountStatus);
  }
}
