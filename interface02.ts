interface User1 {
  readonly _id: number; //readonly can't update
  email: String;
  userId: number;
  number?: number; //optional
  startTrail(): String;
}

interface User1 {
  githubId: number;
}

interface Admin extends User1 {
  Id: string;
}

const dataLog1: Admin = {
  email: "suyog@gmai.com",
  userId: 123,
  githubId: 123,
  Id: "dom",
  _id: 12,
  startTrail: () => {
    return "hello";
  },
};
