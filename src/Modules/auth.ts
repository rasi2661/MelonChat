import { gun } from "./gun";
export var user = gun.user().recall({sessionStorage: true});

export const loginUser = (username: string, password: string, cb: any = () => {}) => {
  user.auth(username, password, (ack: any) => {
    cb(ack);
  })
};

export const registerUser = (username: string, password: string, cb: any = () => {}) => {
  user.create(username, password, (ack: any) => {
    cb(ack);
  });
}
