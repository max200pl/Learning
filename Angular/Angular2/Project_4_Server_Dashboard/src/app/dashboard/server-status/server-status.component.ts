import {
  AfterViewInit,
  Component,
  DestroyRef,
  effect,
  inject,
  OnDestroy,
  OnInit,
  signal,
} from '@angular/core';

@Component({
  selector: 'app-server-status',
  standalone: true,
  imports: [],
  templateUrl: './server-status.component.html',
  styleUrl: './server-status.component.css',
})
/* export class ServerStatusComponent implements OnInit, AfterViewInit, OnDestroy {
  currentStatus: 'online' | 'offline' | 'unknown' = 'online';
  private intervalId?: NodeJS.Timeout; // To store the interval ID for cleanup

  constructor() {}

  ngOnInit() {
    this.intervalId = setInterval(() => {
      const rnd = Math.random(); // 0 to 1
      if (rnd < 0.5) {
        this.currentStatus = 'online';
      } else if (rnd < 0.9) {
        this.currentStatus = 'offline';
      } else {
        this.currentStatus = 'unknown';
      }
    }, 5000);
  }

  ngAfterViewInit() {
    // This method is called after the view has been initialized
    // You can perform any additional setup here if needed

    console.log('ServerStatusComponent view initialized');
    // For example, you can access child components or DOM elements here
  }

  ngOnDestroy() {
    // This method is called just before the component is destroyed
    // You can perform any cleanup here if needed

    console.log('ServerStatusComponent destroyed');
    // For example, you can unsubscribe from observables or detach event listeners here
    // clearInterval(this.intervalId); // If you have an interval running, clear it here
    // this.intervalId = null; // Set the intervalId to null to avoid memory leaks

    clearTimeout(this.intervalId); // Clear the interval to prevent memory leaks
  }
} */
export class ServerStatusComponent implements OnInit {
  currentStatus = signal<'online' | 'offline' | 'unknown'>('online'); // Using signal to track the current status
  private destroyRef = inject(DestroyRef); // Inject the DestroyRef service
  constructor() {
    effect(() => {
      // This effect will run whenever currentStatus changes
      console.log('Current status:', this.currentStatus()); // Log the current status whenever it changes
    });
  }

  ngOnInit() {
    const intervalId = setInterval(() => {
      const rnd = Math.random(); // 0 to 1
      if (rnd < 0.5) {
        this.currentStatus.set('online');
      } else if (rnd < 0.9) {
        this.currentStatus.set('offline');
      } else {
        this.currentStatus.set('unknown');
      }
    }, 5000);

    this.destroyRef.onDestroy(() => {
      // This will be called when the component is destroyed
      clearInterval(intervalId); // Clear the interval to prevent memory leaks
    });
  }
}
