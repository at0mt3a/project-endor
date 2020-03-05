export function wrapAsyncFunc(asyncRoute) {
  //console.log(`UTILS WRAP-ASYNC -- asyncRoute: ${asyncRoute}`);
  return function routeWrapper(req, res, next) {
    return asyncRoute(req, res, next).catch(next);
  };
}
