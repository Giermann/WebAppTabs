/* Any copyright is dedicated to the Public Domain.
 * http://creativecommons.org/publicdomain/zero/1.0/
 */

// Basic tests that starting and stopping the extension builds the right UI
importScript("startup-tests.js");

function test() {
  getAddon(function(aAddon) {
    ok(aAddon.userDisabled, "Add-on should not be enabled");

    let hbox = document.getElementById("webapptabs-buttons");
    ok(!hbox, "Overlay element shouldn't exist");

    enableAddon(function() {
      testBasicState();
    });
  });
}