var Gun = require('gun');
          require('gun/sea');
var gun = new Gun()
export var user = gun.user();

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
