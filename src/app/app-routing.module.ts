import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Componentes que les quiero hacer pagina exclusiva
import { ListaEmpleadosComponent } from './lista-empleados/lista-empleados.component';
import { RegistrarEmpleadoComponent } from './registrar-empleado/registrar-empleado.component';
import { ActualizarEmpleadoComponent } from './actualizar-empleado/actualizar-empleado.component';
import { EmpleadoDetallesComponent } from './empleado-detalles/empleado-detalles.component';
import { ListadoFacturasComponent } from './listado-facturas/listado-facturas.component';

const routes: Routes = [
  {path: 'empleados', component:ListaEmpleadosComponent},
  {path: '', redirectTo:'empleados', pathMatch:'full'},
  {path: 'registrar-empleado', component:RegistrarEmpleadoComponent},
  {path : 'actualizar-empleado/:id',component : ActualizarEmpleadoComponent},
  {path : 'empleado-detalles/:id', component : EmpleadoDetallesComponent},
  {path: 'listado-facturas',component : ListadoFacturasComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModmule { }
