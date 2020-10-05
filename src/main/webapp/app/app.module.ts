import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import './vendor';
import { AbdelganyDemoSharedModule } from 'app/shared/shared.module';
import { AbdelganyDemoCoreModule } from 'app/core/core.module';
import { AbdelganyDemoAppRoutingModule } from './app-routing.module';
import { AbdelganyDemoHomeModule } from './home/home.module';
import { AbdelganyDemoEntityModule } from './entities/entity.module';
// jhipster-needle-angular-add-module-import JHipster will add new module here
import { MainComponent } from './layouts/main/main.component';
import { NavbarComponent } from './layouts/navbar/navbar.component';
import { FooterComponent } from './layouts/footer/footer.component';
import { PageRibbonComponent } from './layouts/profiles/page-ribbon.component';
import { ErrorComponent } from './layouts/error/error.component';

@NgModule({
  imports: [
    BrowserModule,
    AbdelganyDemoSharedModule,
    AbdelganyDemoCoreModule,
    AbdelganyDemoHomeModule,
    // jhipster-needle-angular-add-module JHipster will add new module here
    AbdelganyDemoEntityModule,
    AbdelganyDemoAppRoutingModule,
  ],
  declarations: [MainComponent, NavbarComponent, ErrorComponent, PageRibbonComponent, FooterComponent],
  bootstrap: [MainComponent],
})
export class AbdelganyDemoAppModule {}
