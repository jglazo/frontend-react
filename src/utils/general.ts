export const APP_NAME_PREFIX = '@LandoUSFront';

export const buildActionType = (actionType: string) => {
  return `${APP_NAME_PREFIX}/${actionType}`;
};

export const ResourceState = {
  IDLE: 'idle',
  READY: 'ready',
  ERROR: 'error',
  LOADING: 'loading',
};

export interface ActionDefault {
  type: string | any;
  payload: Record<string, any> | any;
}
