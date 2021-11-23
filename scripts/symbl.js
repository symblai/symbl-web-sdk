/*! $name.js $version

$license
 */
/* eslint strict:0 */
(function(root) {
  var bundle = $bundle;
  var Symbl = bundle($entry);
  /* globals define */
  if (typeof define === 'function' && define.amd) {
    define([], function() { return Symbl; });
  } else {
    var sdk = root.sdk = root.sdk || {};
    sdk.Symbl = sdk.Symbl || Symbl;
  }
})(typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : this);
