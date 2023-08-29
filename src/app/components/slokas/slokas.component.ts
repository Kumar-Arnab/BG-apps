import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SlokaModel } from 'src/app/models/sloka.model';
import { GitaService } from 'src/app/services/gita.service';

@Component({
  selector: 'app-slokas',
  templateUrl: './slokas.component.html',
  styleUrls: ['./slokas.component.css']
})
export class SlokasComponent implements OnInit {

  slokas: SlokaModel[] = [];
  chId: any = '';

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private gitaService: GitaService
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.chId = params.get('ch_id');

      this.gitaService.slokaList(this.chId).subscribe((res: SlokaModel[]) => {
        this.slokas = res;
      });
    });
  }

  readSlok(slokId: string) {
    this.router.navigate(['/sloka', slokId])
  }

}
