export interface SnackbarConfig {
    type? : string,
    message : string,
    timeout? : number,
		icon? : string,
    close? : boolean,
    buttons? : Array<SnackbarButton>
}

interface SnackbarButton {
  label : string,
  action : Function
}