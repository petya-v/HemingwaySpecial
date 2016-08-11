// PHYSICS
function PhysicsSettings(){
    return{
        Cd : 0.5,                                           // drag coefficient of sphere is ~ 0.5
        rho : 1.22,                                         // density of air in kg / m^3
        A : Math.PI * 30 * 30 / (10000),                    // reference area in m^2
        ag : 9.81,                                          // earth gravity in m / s^2
        frameRate : 1 / 30,                                 // seconds
        frameDelay : (1 / 30) * 1000,                       // ms => frameRate * 100
        speedUp : 3,
        reverseSpeedIndex : 170
    };
}    
    
    
    