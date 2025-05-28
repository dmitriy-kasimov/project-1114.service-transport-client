export enum ELightMods {
    // Normal light behavior. Lights cycle through off, then low beams, then high beams.
    // Note: It's affected by day or night; high beams don't exist in daytime.
    NoVehicleLightOverride,

    // Vehicle doesn't have lightsHandlers, always off.
    ForceVehicleLightsOff,

    // Vehicle has always-on lightsHandlers.
    // During day: Cycles between low beams and high beams.
    // At night: Cycles between low beams, low beams, and high beams.
    ForceVehicleLightsOn,

    // Sets vehicle lightsHandlers on. Behaves like normal lightsHandlers (same as 0).
    SetVehicleLightsOn,

    // Sets vehicle lightsHandlers off. Behaves like normal lightsHandlers (same as 0).
    SetVehicleLightsOff,
}