function howMuchProtein(weightPounds) {
    weightKg = weightPounds / 2.205;
    lowerProteinLimit = (weightKg*1.6).toFixed(0);
    upperProteinLimit = (weightKg*2.2).toFixed(0);
    console.log("Since you weigh "+weightPounds+"lbs, you need to consume "+lowerProteinLimit+"-"+upperProteinLimit+" grams of protein daily for general muscle-building.");
}

howMuchProtein(120);