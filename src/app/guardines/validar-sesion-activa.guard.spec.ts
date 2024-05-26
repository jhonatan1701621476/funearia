import { TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { ValidarSesionActivaGuard } from './validar-sesion-activa.guard';

describe('ValidarSesionActivaGuard', () => {
  let guard: ValidarSesionActivaGuard;
  let router: Router;

  beforeEach(() => {

    TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      providers: [
        ValidarSesionActivaGuard,
      ]
    });

    guard = TestBed.inject(ValidarSesionActivaGuard);
    router = TestBed.inject(Router);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });

  it('should return true if the user is logged in', () => {
    const result = guard.canActivate(null as any, null as any);
    expect(result).toBe(true);
  });

  it('should navigate to login if the user is not logged in', () => {
    const navigateSpy = spyOn(router, 'navigate');

    const result = guard.canActivate(null as any, null as any);

    expect(result).toBe(false);
    expect(navigateSpy).toHaveBeenCalledWith(['/login']);
  });
});
