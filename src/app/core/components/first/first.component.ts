import {Component, Inject, InjectionToken, OnInit} from '@angular/core';
import {ECategoryEnum} from '@shared/enums/category.enum';
import {Constant} from '@shared/models/const.model';
import {CONSTANT_SERVICE} from '@core/services/constant.service';
import {GeneratorService} from '@core/services/generator.service';
import {GenerateRandomString, GenerateRandomNFactory} from '@core/services/factory/random-generator.factory';

const CONST = new InjectionToken<Constant>('Constant Service');

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.scss'],
  providers: [
    { provide: CONST, useValue: CONSTANT_SERVICE},
    { provide: GenerateRandomString,
      useFactory: GenerateRandomNFactory(5),
      deps: [GeneratorService]
    }
  ]
})
export class FirstComponent implements OnInit {

  name = 'First Name';
  description = 'First Description';
  price = 3;
  category: ECategoryEnum = ECategoryEnum.First;
  isAvailable = true;

  constructor(
    @Inject(CONST) public constAppData: Constant,
    @Inject(GenerateRandomString) public generatedString: string,
  ) { }

  ngOnInit(): void {
  }

}
