import { Component, OnInit } from '@angular/core';
import {RovService} from '../../../@core/backend/services/rov.service';

@Component({
  selector: 'ngx-pid-controller',
  template: `
    <nb-card size="tiny">
      <nb-card-header>
          PID Controller
      </nb-card-header>
      <nb-card-body>
          <button nbButton size="small" fullWidth [status]="yawPidStatus ? 'success' : 'danger'" (click)="toggleYaw()">Yaw Pid</button>
          <button nbButton size="small" fullWidth [status]="rollPidStatus ? 'success' : 'danger'" (click)="toggleRoll()">Roll Pid</button>
          <button nbButton size="small" fullWidth [status]="vertPidStatus ? 'success' : 'danger'" (click)="toggleVert()">Vert Pid</button>
          <button nbButton size="small" fullWidth [status]="latPidStatus ? 'success' : 'danger'" (click)="toggleLat()">Lat Pid</button>
          <button nbButton size="small" fullWidth [status]="longPidStatus ? 'success' : 'danger'" (click)="toggleLong()">Long Pid</button>
      </nb-card-body>
    </nb-card>
  `,  styleUrls: ['./pid-controller.component.scss'],
})
export class PidControllerComponent {

  yawPidStatus: boolean;
  rollPidStatus: boolean;
  vertPidStatus: boolean;
  latPidStatus: boolean;
  longPidStatus: boolean;

  constructor(
      private rovService: RovService,
  ) {
    this.yawPidStatus = false;
    this.rollPidStatus = false;
    this.vertPidStatus = false;
    this.latPidStatus = false;
    this.longPidStatus = false;
  }

  public toggleYaw() {
    this.yawPidStatus = !this.yawPidStatus;
    this.rovService.topic('yawPid').publish({data: this.yawPidStatus});
  }
  public toggleRoll() {
    this.rollPidStatus = !this.rollPidStatus;
    this.rovService.topic('rollPid').publish({data: this.rollPidStatus});
  }
  public toggleVert() {
    this.vertPidStatus = !this.vertPidStatus;
    this.rovService.topic('vertPid').publish({data: this.vertPidStatus});
  }
  public toggleLat() {
    this.latPidStatus = !this.latPidStatus;
    this.rovService.topic('latPid').publish({data: this.latPidStatus});
  }
  public toggleLong() {
    this.longPidStatus = !this.longPidStatus;
    this.rovService.topic('longPid').publish({data: this.longPidStatus});
  }


}
