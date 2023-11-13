import Patches from "Patches";
import Time from "Time";
import Diagnostics from "Diagnostics";

(async function () {
  function getDayOfTheWeek(): void {
    const todayDate = new Date();
    const dayOfTheWeek = todayDate.getDay();
    const time = todayDate.getHours();
    Patches.inputs.setScalar("dayOfTheWeek", dayOfTheWeek);
    Patches.inputs.setScalar("time", time);
    Diagnostics.log(time);
  }

  Time.setTimeout(getDayOfTheWeek, 1000);
})();
