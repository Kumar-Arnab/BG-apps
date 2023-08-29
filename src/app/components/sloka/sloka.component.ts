import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SlokaModel } from 'src/app/models/sloka.model';
import { GitaService } from 'src/app/services/gita.service';

@Component({
  selector: 'app-sloka',
  templateUrl: './sloka.component.html',
  styleUrls: ['./sloka.component.css']
})
export class SlokaComponent implements OnInit {

  sloka = new SlokaModel();
  slokId: any = '';

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private gitaService: GitaService
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.slokId = params.get('slok_id');

      this.gitaService.sloka(this.slokId).subscribe((res: SlokaModel) => {
        this.sloka = res;
      });
    });
  }

  slokList(chapterId: string) {
    this.router.navigate(['/slokas', chapterId]);
  }

}
