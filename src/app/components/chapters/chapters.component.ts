import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Chapter } from 'src/app/models/chapter.model';
import { GitaService } from 'src/app/services/gita.service';

@Component({
  selector: 'app-chapters',
  templateUrl: './chapters.component.html',
  styleUrls: ['./chapters.component.css']
})
export class ChaptersComponent implements OnInit {

  chapters: Chapter[] = [];

  constructor(
    private gitaService: GitaService,
    private router: Router
  ) {}

  ngOnInit(): void {
      this.gitaService.chapterList().subscribe((res: Chapter[]) => {
        console.log(res)
        this.chapters = res;
      });
  }

  readChapter(chapterId: string) {
    this.router.navigate(['/chapters', chapterId]);
  }

}
