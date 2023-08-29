import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Chapter } from 'src/app/models/chapter.model';
import { GitaService } from 'src/app/services/gita.service';

@Component({
  selector: 'app-chapter',
  templateUrl: './chapter.component.html',
  styleUrls: ['./chapter.component.css']
})
export class ChapterComponent implements OnInit {
  chId: any = '';
  chapter = new Chapter();

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private gitaService: GitaService
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.chId = params.get('ch_id');

      this.gitaService.chapter(this.chId).subscribe((res: Chapter) => {
        this.chapter = res;
      });
    });
  }

  readSloka(chapterId: string) {
    this.router.navigate(['/slokas', chapterId]);
  }

}
