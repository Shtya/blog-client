import { Notyf } from "notyf";
import 'notyf/notyf.min.css';

const notyf = new Notyf()
export const success = (message ) => notyf.success({message:message , duration:2000  , position:{x:"right" , y:"top"}})
export const error = (message ) => notyf.error({message:message , duration:2000 , position:{x:"right" , y:"top"}})

