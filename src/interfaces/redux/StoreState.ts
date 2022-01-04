import { AuthState } from "./AuthState";
import { MesaState } from "./MesaState";

export interface StoreState{
  auth: AuthState;
  mesa: MesaState;
}