
// ------------------------------------

$(function () {
    //var _obs = "PG PG PG PG PG PG PG PG PG PG GP GP GP GP GP GSGSGSGSGSGSGSGSGSGSGSGSGSGSGSPSPSPSPSPSPSPSPSPSPSPSPSPSPSPSPUPUPUPUSUTSUTSUTSUTSUTSUTSUTSUTSUTSUTSUTSUTSUTSUTSUT";
    var _obs = "USPTPTPGTPTGTPGTGPTPGTGPSTPTGTSPGPSUSTPTGTUTSPGPSGTPTGPGSUSTUTSPSGTPTGPGSUSTUTSPSGTPTGPGUSUTUPUGSTSPSGTPTGPGUSUTUPUGSTSPSGTPTGPG";
    $(".obs.textarea").val(_obs);
    $(".codes.textarea").val("USTPG");
    $("[name='exp_model'][value='first_order']").click();
    sa_start();
    
    var _seq = sf_to_seq();
    console.log(_seq);
    console.log(_seq.length);
    
    //USPTPTPGTPTGTPGTGPTPGTGPSTPTGTSPGPSUSTPTGTUTSPGPSGTPTGPGSUSTUTSPSGTPTGPGSUSTUTSPSGTPTGPGUSUTUPUGSTSPSGTPTGPGUSUTUPUGSTSPSGTPTGPG
});