export interface ISingleSignOnClient<T = any> {
  request: () => Promise<T>
}