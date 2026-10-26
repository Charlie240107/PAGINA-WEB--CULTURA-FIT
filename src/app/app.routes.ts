import { Routes } from '@angular/router';
import { Inicio } from './pages/inicio/inicio';
import { PlanesPrecios } from './pages/planes-precios/planes-precios';
import { MiEntrenador } from './pages/mi-entrenador/mi-entrenador';
import { TerminosCondiciones } from './pages/terminos-condiciones/terminos-condiciones';
import { AvisoPrivacidad } from './pages/aviso-privacidad/aviso-privacidad';
import { AvisoMedico } from './pages/aviso-medico/aviso-medico';
export const routes: Routes = [
    {
        path: '',
        component: Inicio
    },
    {
        path: 'planes-precios',
        component: PlanesPrecios
    },
    {
        path: 'mi-entrenador',
        component: MiEntrenador
    },
    {
        path: 'terminos-condiciones',
        component: TerminosCondiciones
    },
    {
        path: 'aviso-privacidad',
        component: AvisoPrivacidad
    },
    {
        path: 'aviso-medico',
        component: AvisoMedico
    },
];
