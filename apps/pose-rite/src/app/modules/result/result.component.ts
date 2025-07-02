import { AfterViewInit, Component, ElementRef, inject, Input, OnInit, ViewChild } from '@angular/core';
import { MLService } from '@pose-rite/http-services';
import { take, tap } from 'rxjs';

@Component({
  selector: 'pose-rite-result',
  imports: [],
  templateUrl: './result.component.html',
  styleUrl: './result.component.scss'
})
export class ResultComponent implements OnInit, AfterViewInit {
  mlService = inject(MLService);

  imagePath = 'assets/burpee.png'
  
  @ViewChild('img') img!: ElementRef<HTMLImageElement>;
  @ViewChild('canvas') canvas!: ElementRef<HTMLCanvasElement>;

  @Input() set imgPath(path: string) {
    this.imagePath = path;
    if (this.img) this.syncCanvasToImage(); // Resync on new image
  }

  ngOnInit() {
    this.detectPose()
  }

  ngAfterViewInit() {
    this.syncCanvasToImage();
  }

  detectPose() {
    this.mlService.detectPoses().pipe(
      take(1),
      tap((poses) => {
        console.log(poses);
      })
    )
    .subscribe();
  }

  syncCanvasToImage() {
    const img = this.img.nativeElement;
    const canvas = this.canvas.nativeElement;

    img.onload = () => {
      canvas.width = img.width;
      canvas.height = img.height;
      this.drawOnCanvas(); // Optional: Draw something on the canvas
    };
  }

  drawOnCanvas() {
    const ctx = this.canvas.nativeElement.getContext('2d');
    if (ctx) {
      ctx.strokeStyle = 'red';
      ctx.lineWidth = 5;
      ctx.strokeRect(10, 10, 100, 100); // Example: Draw a red rectangle
    }
  }
}
