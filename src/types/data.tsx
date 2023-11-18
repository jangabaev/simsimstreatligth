export interface IGetHome {
  id: number;
  is_off_time: string;
  is_on_time: string;
  location: string;
  name: string;
  state: boolean;
};

export interface IPostStreat{
  id?: number;
  is_off_time: string;
  is_on_time: string;
  location: string;
  name: string;
  state: boolean;
}

export type IGetHomeArray = IGetHome[];

