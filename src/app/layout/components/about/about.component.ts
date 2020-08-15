import {Component, Inject, InjectionToken, OnInit, Optional} from '@angular/core';
import {CONSTANT_SERVICE} from '@core/services/constant.service';
import {GenerateRandomNFactory, GenerateRandomString} from '@core/services/factory/random-generator.factory';
import {GeneratorService} from '@core/services/generator.service';
import {Constant} from '@shared/models/const.model';
import {LocalStorageService} from '@core/services/local-storage.service';
import {ConfigOptionsService} from '@core/services/config-options.service';

const CONST = new InjectionToken<Constant>('Constant Service');

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
  providers: [
    { provide: LocalStorageService, useClass: LocalStorageService},
    { provide: CONST, useValue: CONSTANT_SERVICE},
    { provide: GenerateRandomString,
      useFactory: GenerateRandomNFactory(5),
      deps: [GeneratorService]
    }
  ]
})
export class AboutComponent implements OnInit {

  componentStoreKey = 'about-component';

  constructor(
    @Optional() public localStorageService: LocalStorageService,
    @Optional() public configOptionsService: ConfigOptionsService,
    @Optional() @Inject(CONST) public constAppData: Constant,
    @Optional() @Inject(GenerateRandomString) public generatedString: string,
  ) { }

  ngOnInit(): void {
    this.localStorageService.setItem(this.componentStoreKey, {data: 'Initial data', added: Date.now()});
    // this.localStorageService.getDate();
    this.configOptionsService.setConfigValues({id: '0', email: 'test@mail.com', name: 'ConfigAuthor'});
  }

}
