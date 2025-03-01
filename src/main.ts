import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './symerp/app.component';
import { appConfig } from './symerp/app.config';

// import { appConfig } from './app/app.config';

bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));
