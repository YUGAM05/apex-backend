"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DRUG_DATABASE = void 0;
// Comprehensive Drug Database - 50+ Common Medications
exports.DRUG_DATABASE = [
    // ==================== ANALGESICS & ANTIPYRETICS ====================
    {
        name: 'Paracetamol',
        genericName: 'Acetaminophen',
        category: 'Pain reliever & Fever reducer',
        treatsSymptoms: ['headache', 'fever', 'pain', 'body ache', 'cold', 'flu', 'toothache', 'mild pain'],
        dosage: {
            adult: '500-1000mg',
            child: '10-15mg/kg',
            frequency: 'Every 4-6 hours',
            maxDaily: '4000mg (adults), do not exceed'
        },
        sideEffects: ['Nausea', 'Stomach pain', 'Loss of appetite', 'Rash (rare)'],
        warnings: [
            'Do not exceed recommended dose - can cause serious liver damage',
            'Avoid alcohol while taking this medication',
            'Not recommended if you have liver disease'
        ],
        contraindications: ['Severe liver disease', 'Alcohol dependency'],
        interactions: ['warfarin', 'alcohol']
    },
    {
        name: 'Ibuprofen',
        genericName: 'Ibuprofen',
        category: 'NSAID Pain reliever',
        treatsSymptoms: ['headache', 'pain', 'inflammation', 'fever', 'arthritis', 'muscle pain', 'toothache', 'backache', 'joint pain'],
        dosage: {
            adult: '200-400mg',
            child: '5-10mg/kg',
            frequency: 'Every 4-6 hours with food',
            maxDaily: '1200mg (OTC), 3200mg (prescription)'
        },
        sideEffects: ['Upset stomach', 'Heartburn', 'Dizziness', 'Nausea'],
        warnings: [
            'Take with food to reduce stomach irritation',
            'May increase risk of heart attack or stroke with long-term use',
            'Can cause stomach bleeding'
        ],
        contraindications: ['Stomach ulcers', 'Kidney disease', 'Heart disease', 'Pregnancy (3rd trimester)'],
        interactions: ['aspirin', 'warfarin', 'blood pressure medications', 'lithium']
    },
    {
        name: 'Aspirin',
        genericName: 'Acetylsalicylic acid',
        category: 'NSAID & Blood thinner',
        treatsSymptoms: ['headache', 'pain', 'fever', 'inflammation', 'heart attack prevention', 'stroke prevention'],
        dosage: {
            adult: '325-650mg for pain, 81mg for heart protection',
            child: 'Not recommended under 12 years',
            frequency: 'Every 4-6 hours',
            maxDaily: '4000mg'
        },
        sideEffects: ['Stomach irritation', 'Heartburn', 'Nausea', 'Increased bleeding risk'],
        warnings: [
            "Do not give to children under 12 (Reye's syndrome risk)",
            'Increases bleeding risk',
            'Take with food'
        ],
        contraindications: ['Bleeding disorders', 'Children under 12', 'Pregnancy (3rd trimester)'],
        interactions: ['warfarin', 'ibuprofen', 'blood thinners', 'methotrexate']
    },
    {
        name: 'Diclofenac',
        genericName: 'Diclofenac',
        category: 'NSAID',
        treatsSymptoms: ['arthritis', 'joint pain', 'muscle pain', 'inflammation', 'back pain', 'dental pain'],
        dosage: {
            adult: '50mg',
            child: 'Consult doctor',
            frequency: '2-3 times daily with food',
            maxDaily: '150mg'
        },
        sideEffects: ['Stomach upset', 'Diarrhea', 'Headache', 'Dizziness'],
        warnings: [
            'Take with food',
            'Increased cardiovascular risk',
            'May cause stomach ulcers'
        ],
        contraindications: ['Heart disease', 'Stomach ulcers', 'Severe kidney disease'],
        interactions: ['aspirin', 'warfarin', 'lithium', 'blood pressure medications']
    },
    {
        name: 'Naproxen',
        genericName: 'Naproxen',
        category: 'NSAID',
        treatsSymptoms: ['arthritis', 'pain', 'inflammation', 'menstrual cramps', 'headache', 'muscle aches'],
        dosage: {
            adult: '220-550mg',
            child: '5mg/kg (12+ years)',
            frequency: 'Every 8-12 hours',
            maxDaily: '1100mg'
        },
        sideEffects: ['Upset stomach', 'Heartburn', 'Drowsiness', 'Headache'],
        warnings: [
            'Take with food or milk',
            'May increase bleeding risk',
            'Long-term use may affect heart and kidneys'
        ],
        contraindications: ['Heart disease', 'Stomach ulcers', 'Severe kidney disease'],
        interactions: ['aspirin', 'warfarin', 'blood pressure medications']
    },
    // ==================== ANTIBIOTICS ====================
    {
        name: 'Amoxicillin',
        genericName: 'Amoxicillin',
        category: 'Antibiotic - Penicillin',
        treatsSymptoms: ['bacterial infection', 'infection', 'sore throat', 'ear infection', 'pneumonia', 'urinary tract infection', 'bronchitis'],
        dosage: {
            adult: '250-500mg',
            child: '20-40mg/kg/day',
            frequency: 'Every 8 hours',
            maxDaily: '1500mg (varies)'
        },
        sideEffects: ['Nausea', 'Diarrhea', 'Rash', 'Yeast infection'],
        warnings: [
            'Complete full course even if feeling better',
            'Not effective against viral infections',
            'May cause allergic reactions'
        ],
        contraindications: ['Penicillin allergy', 'Mononucleosis'],
        interactions: ['birth control pills', 'methotrexate', 'warfarin']
    },
    {
        name: 'Azithromycin',
        genericName: 'Azithromycin',
        category: 'Antibiotic - Macrolide',
        treatsSymptoms: ['bacterial infection', 'respiratory infection', 'sore throat', 'ear infection', 'pneumonia', 'sinusitis'],
        dosage: {
            adult: '500mg on day 1, then 250mg',
            child: '10mg/kg on day 1, then 5mg/kg',
            frequency: 'Once daily',
            maxDaily: '500mg initial, 250mg maintenance'
        },
        sideEffects: ['Diarrhea', 'Nausea', 'Stomach pain', 'Headache'],
        warnings: [
            'Complete full course',
            'May cause heart rhythm problems',
            'Not for viral infections'
        ],
        contraindications: ['Liver disease', 'Heart rhythm disorders'],
        interactions: ['warfarin', 'digoxin', 'antacids']
    },
    {
        name: 'Ciprofloxacin',
        genericName: 'Ciprofloxacin',
        category: 'Antibiotic - Fluoroquinolone',
        treatsSymptoms: ['bacterial infection', 'urinary tract infection', 'respiratory infection', 'skin infection', 'bone infection'],
        dosage: {
            adult: '250-750mg',
            child: 'Generally not recommended',
            frequency: 'Every 12 hours',
            maxDaily: '1500mg'
        },
        sideEffects: ['Nausea', 'Diarrhea', 'Dizziness', 'Headache'],
        warnings: [
            'May cause tendon damage',
            'Avoid sunlight exposure',
            'Take 2 hours before or after antacids'
        ],
        contraindications: ['Children under 18', 'Pregnancy', 'Tendon disorders'],
        interactions: ['antacids', 'iron supplements', 'dairy products', 'warfarin']
    },
    {
        name: 'Doxycycline',
        genericName: 'Doxycycline',
        category: 'Antibiotic - Tetracycline',
        treatsSymptoms: ['bacterial infection', 'acne', 'respiratory infection', 'urinary tract infection', 'malaria prevention'],
        dosage: {
            adult: '100mg',
            child: '2mg/kg (8+ years)',
            frequency: 'Twice daily',
            maxDaily: '200mg'
        },
        sideEffects: ['Nausea', 'Diarrhea', 'Sun sensitivity', 'Stomach upset'],
        warnings: [
            'Take with full glass of water',
            'Avoid sun exposure',
            'Do not take with dairy products'
        ],
        contraindications: ['Pregnancy', 'Children under 8', 'Liver disease'],
        interactions: ['antacids', 'iron', 'calcium', 'birth control pills']
    },
    {
        name: 'Cephalexin',
        genericName: 'Cephalexin',
        category: 'Antibiotic - Cephalosporin',
        treatsSymptoms: ['bacterial infection', 'skin infection', 'urinary tract infection', 'respiratory infection', 'bone infection'],
        dosage: {
            adult: '250-500mg',
            child: '25-50mg/kg/day',
            frequency: 'Every 6-12 hours',
            maxDaily: '4000mg'
        },
        sideEffects: ['Diarrhea', 'Nausea', 'Stomach upset', 'Rash'],
        warnings: [
            'Complete full course',
            'May cause allergic reactions',
            'Take with or without food'
        ],
        contraindications: ['Cephalosporin allergy'],
        interactions: ['metformin', 'probenecid']
    },
    {
        name: 'Metronidazole',
        genericName: 'Metronidazole',
        category: 'Antibiotic - Nitroimidazole',
        treatsSymptoms: ['bacterial infection', 'parasitic infection', 'dental infection', 'stomach infection'],
        dosage: {
            adult: '250-500mg',
            child: '7.5mg/kg',
            frequency: 'Every 8 hours',
            maxDaily: '4000mg'
        },
        sideEffects: ['Metallic taste', 'Nausea', 'Headache', 'Loss of appetite'],
        warnings: [
            'Avoid alcohol during treatment and 48 hours after',
            'May cause severe reaction with alcohol',
            'Complete full course'
        ],
        contraindications: ['First trimester pregnancy', 'Alcohol use'],
        interactions: ['alcohol', 'warfarin', 'lithium']
    },
    // ==================== ANTIHISTAMINES ====================
    {
        name: 'Cetirizine',
        genericName: 'Cetirizine',
        category: 'Antihistamine',
        treatsSymptoms: ['allergy', 'allergies', 'hay fever', 'itching', 'hives', 'sneezing', 'runny nose', 'watery eyes'],
        dosage: {
            adult: '10mg',
            child: '5-10mg (6+ years)',
            frequency: 'Once daily',
            maxDaily: '10mg'
        },
        sideEffects: ['Drowsiness', 'Dry mouth', 'Headache', 'Fatigue'],
        warnings: [
            'May cause drowsiness - avoid driving',
            'Avoid alcohol',
            'Can increase drowsiness with other sedatives'
        ],
        contraindications: ['Severe kidney disease'],
        interactions: ['alcohol', 'sedatives', 'sleeping pills']
    },
    {
        name: 'Loratadine',
        genericName: 'Loratadine',
        category: 'Antihistamine - Non-drowsy',
        treatsSymptoms: ['allergy', 'hay fever', 'sneezing', 'runny nose', 'itchy eyes', 'hives'],
        dosage: {
            adult: '10mg',
            child: '5mg (2-5 years), 10mg (6+ years)',
            frequency: 'Once daily',
            maxDaily: '10mg'
        },
        sideEffects: ['Headache', 'Drowsiness (rare)', 'Dry mouth', 'Fatigue'],
        warnings: [
            'Non-drowsy formula',
            'Take on empty stomach for faster effect'
        ],
        contraindications: ['Liver disease (severe)'],
        interactions: ['ketoconazole', 'erythromycin']
    },
    {
        name: 'Diphenhydramine',
        genericName: 'Diphenhydramine',
        category: 'Antihistamine - First generation',
        treatsSymptoms: ['allergy', 'hay fever', 'insomnia', 'itching', 'hives', 'motion sickness', 'cough'],
        dosage: {
            adult: '25-50mg',
            child: '12.5-25mg (6+ years)',
            frequency: 'Every 4-6 hours',
            maxDaily: '300mg'
        },
        sideEffects: ['Drowsiness', 'Dry mouth', 'Dizziness', 'Blurred vision'],
        warnings: [
            'Causes significant drowsiness',
            'Do not drive or operate machinery',
            'Avoid alcohol'
        ],
        contraindications: ['Glaucoma', 'Enlarged prostate', 'Asthma'],
        interactions: ['alcohol', 'sedatives', 'MAO inhibitors']
    },
    {
        name: 'Fexofenadine',
        genericName: 'Fexofenadine',
        category: 'Antihistamine - Non-drowsy',
        treatsSymptoms: ['allergy', 'hay fever', 'hives', 'itching', 'sneezing', 'runny nose'],
        dosage: {
            adult: '120-180mg',
            child: '30mg (6-11 years)',
            frequency: 'Once or twice daily',
            maxDaily: '180mg'
        },
        sideEffects: ['Headache', 'Nausea', 'Dizziness', 'Drowsiness (rare)'],
        warnings: [
            'Do not take with fruit juice',
            'Non-drowsy formula',
            'Take with water only'
        ],
        contraindications: ['Kidney disease (severe)'],
        interactions: ['antacids', 'fruit juices', 'erythromycin']
    },
    // ==================== GASTROINTESTINAL ====================
    {
        name: 'Omeprazole',
        genericName: 'Omeprazole',
        category: 'Proton pump inhibitor',
        treatsSymptoms: ['acid reflux', 'heartburn', 'gerd', 'stomach acid', 'indigestion', 'ulcer', 'gastritis'],
        dosage: {
            adult: '20-40mg',
            child: 'Consult doctor',
            frequency: 'Once daily before meals',
            maxDaily: '40mg'
        },
        sideEffects: ['Headache', 'Nausea', 'Diarrhea', 'Stomach pain'],
        warnings: [
            'Take 30-60 minutes before meals',
            'Long-term use may affect bone health',
            'May mask symptoms of serious conditions'
        ],
        contraindications: ['Liver disease (severe)'],
        interactions: ['warfarin', 'clopidogrel', 'digoxin', 'methotrexate']
    },
    {
        name: 'Pantoprazole',
        genericName: 'Pantoprazole',
        category: 'Proton pump inhibitor',
        treatsSymptoms: ['acid reflux', 'gerd', 'heartburn', 'ulcer', 'erosive esophagitis'],
        dosage: {
            adult: '20-40mg',
            child: 'Consult doctor',
            frequency: 'Once daily before meals',
            maxDaily: '40mg'
        },
        sideEffects: ['Headache', 'Diarrhea', 'Nausea', 'Stomach pain'],
        warnings: [
            'Take before eating',
            'May increase fracture risk with long-term use',
            'Do not crush tablets'
        ],
        contraindications: ['Severe liver disease'],
        interactions: ['warfarin', 'atazanavir', 'methotrexate']
    },
    {
        name: 'Ranitidine',
        genericName: 'Ranitidine',
        category: 'H2 blocker',
        treatsSymptoms: ['heartburn', 'acid reflux', 'ulcer', 'gerd', 'indigestion'],
        dosage: {
            adult: '150mg',
            child: '2-4mg/kg',
            frequency: 'Twice daily or at bedtime',
            maxDaily: '300mg'
        },
        sideEffects: ['Headache', 'Dizziness', 'Constipation', 'Diarrhea'],
        warnings: [
            'Note: FDA requested removal from market due to contaminant concerns',
            'Consider alternative H2 blockers',
            'Take with or without food'
        ],
        contraindications: ['Kidney disease (severe)'],
        interactions: ['warfarin', 'theophylline', 'ketoconazole']
    },
    {
        name: 'Metoclopramide',
        genericName: 'Metoclopramide',
        category: 'Antiemetic',
        treatsSymptoms: ['nausea', 'vomiting', 'gastroparesis', 'acid reflux'],
        dosage: {
            adult: '10mg',
            child: '0.1-0.2mg/kg',
            frequency: '3-4 times daily before meals',
            maxDaily: '40mg'
        },
        sideEffects: ['Drowsiness', 'Restlessness', 'Fatigue', 'Diarrhea'],
        warnings: [
            'May cause movement disorders',
            'Risk increases with long-term use',
            'Use for shortest duration possible'
        ],
        contraindications: ['Parkinson disease', 'Seizure disorders', 'Gastrointestinal bleeding'],
        interactions: ['alcohol', 'sedatives', 'digoxin']
    },
    {
        name: 'Loperamide',
        genericName: 'Loperamide',
        category: 'Antidiarrheal',
        treatsSymptoms: ['diarrhea', 'loose stools', 'stomach upset'],
        dosage: {
            adult: '4mg initially, then 2mg after each loose stool',
            child: 'Based on weight (6+ years)',
            frequency: 'As needed',
            maxDaily: '16mg'
        },
        sideEffects: ['Constipation', 'Dizziness', 'Drowsiness', 'Nausea'],
        warnings: [
            'Do not use if you have bloody diarrhea',
            'Do not exceed recommended dose',
            'Not for use more than 2 days without medical advice'
        ],
        contraindications: ['Bloody diarrhea', 'High fever', 'Bacterial infection'],
        interactions: ['ritonavir', 'quinidine']
    },
    // ==================== CARDIOVASCULAR ====================
    {
        name: 'Atenolol',
        genericName: 'Atenolol',
        category: 'Beta blocker',
        treatsSymptoms: ['high blood pressure', 'hypertension', 'angina', 'heart attack prevention', 'irregular heartbeat'],
        dosage: {
            adult: '25-100mg',
            child: 'Consult doctor',
            frequency: 'Once daily',
            maxDaily: '100mg'
        },
        sideEffects: ['Fatigue', 'Dizziness', 'Cold hands/feet', 'Slow heartbeat'],
        warnings: [
            'Do not stop suddenly',
            'May mask signs of low blood sugar',
            'Can worsen asthma'
        ],
        contraindications: ['Asthma', 'Severe bradycardia', 'Heart block'],
        interactions: ['insulin', 'calcium channel blockers', 'digoxin']
    },
    {
        name: 'Amlodipine',
        genericName: 'Amlodipine',
        category: 'Calcium channel blocker',
        treatsSymptoms: ['high blood pressure', 'hypertension', 'angina', 'chest pain'],
        dosage: {
            adult: '5-10mg',
            child: 'Consult doctor',
            frequency: 'Once daily',
            maxDaily: '10mg'
        },
        sideEffects: ['Swelling of ankles', 'Headache', 'Dizziness', 'Flushing'],
        warnings: [
            'May cause swelling in legs',
            'Rise slowly from sitting/lying position',
            'Avoid grapefruit juice'
        ],
        contraindications: ['Severe hypotension', 'Cardiogenic shock'],
        interactions: ['simvastatin', 'grapefruit juice', 'cyclosporine']
    },
    {
        name: 'Enalapril',
        genericName: 'Enalapril',
        category: 'ACE inhibitor',
        treatsSymptoms: ['high blood pressure', 'hypertension', 'heart failure', 'kidney protection'],
        dosage: {
            adult: '5-20mg',
            child: '0.08mg/kg',
            frequency: 'Once or twice daily',
            maxDaily: '40mg'
        },
        sideEffects: ['Dry cough', 'Dizziness', 'Headache', 'Fatigue'],
        warnings: [
            'May cause persistent dry cough',
            'Monitor kidney function',
            'Can cause birth defects - avoid in pregnancy'
        ],
        contraindications: ['Pregnancy', 'Bilateral renal artery stenosis', 'Angioedema history'],
        interactions: ['potassium supplements', 'NSAIDs', 'lithium']
    },
    {
        name: 'Losartan',
        genericName: 'Losartan',
        category: 'ARB - Angiotensin receptor blocker',
        treatsSymptoms: ['high blood pressure', 'hypertension', 'kidney protection', 'heart failure'],
        dosage: {
            adult: '25-100mg',
            child: 'Consult doctor',
            frequency: 'Once daily',
            maxDaily: '100mg'
        },
        sideEffects: ['Dizziness', 'Fatigue', 'Back pain', 'Diarrhea'],
        warnings: [
            'Monitor kidney function',
            'Can cause birth defects',
            'May increase potassium levels'
        ],
        contraindications: ['Pregnancy', 'Bilateral renal artery stenosis'],
        interactions: ['potassium supplements', 'NSAIDs', 'lithium']
    },
    {
        name: 'Simvastatin',
        genericName: 'Simvastatin',
        category: 'Statin - Cholesterol lowering',
        treatsSymptoms: ['high cholesterol', 'heart disease prevention', 'cardiovascular risk reduction'],
        dosage: {
            adult: '10-40mg',
            child: 'Consult doctor',
            frequency: 'Once daily in evening',
            maxDaily: '40mg'
        },
        sideEffects: ['Muscle pain', 'Headache', 'Nausea', 'Liver enzyme elevation'],
        warnings: [
            'Take in the evening',
            'Report unexplained muscle pain',
            'Avoid grapefruit juice',
            'Regular liver function monitoring'
        ],
        contraindications: ['Pregnancy', 'Active liver disease', 'Breastfeeding'],
        interactions: ['grapefruit juice', 'amlodipine', 'diltiazem', 'warfarin']
    },
    {
        name: 'Clopidogrel',
        genericName: 'Clopidogrel',
        category: 'Antiplatelet agent',
        treatsSymptoms: ['heart attack prevention', 'stroke prevention', 'blood clot prevention'],
        dosage: {
            adult: '75mg',
            child: 'Not recommended',
            frequency: 'Once daily',
            maxDaily: '75mg'
        },
        sideEffects: ['Bleeding', 'Bruising', 'Nosebleeds', 'Stomach upset'],
        warnings: [
            'Increases bleeding risk',
            'Inform doctors/dentists before procedures',
            'Do not stop without consulting doctor'
        ],
        contraindications: ['Active bleeding', 'Severe liver disease'],
        interactions: ['omeprazole', 'warfarin', 'NSAIDs', 'aspirin']
    },
    // ==================== DIABETES MEDICATIONS ====================
    {
        name: 'Metformin',
        genericName: 'Metformin',
        category: 'Antidiabetic - Biguanide',
        treatsSymptoms: ['diabetes', 'type 2 diabetes', 'high blood sugar', 'prediabetes'],
        dosage: {
            adult: '500-1000mg',
            child: 'Consult doctor',
            frequency: 'Twice daily with meals',
            maxDaily: '2000-2550mg'
        },
        sideEffects: ['Nausea', 'Diarrhea', 'Stomach upset', 'Metallic taste'],
        warnings: [
            'Take with meals to reduce side effects',
            'Regular monitoring of kidney function required',
            'Stop before surgery or imaging with contrast'
        ],
        contraindications: ['Severe kidney disease', 'Liver disease', 'Heart failure'],
        interactions: ['alcohol', 'contrast dye', 'cimetidine']
    },
    {
        name: 'Insulin',
        genericName: 'Insulin',
        category: 'Antidiabetic hormone',
        treatsSymptoms: ['diabetes', 'type 1 diabetes', 'type 2 diabetes', 'high blood sugar'],
        dosage: {
            adult: 'Individualized based on blood sugar',
            child: 'Individualized based on blood sugar',
            frequency: 'As prescribed (varies by type)',
            maxDaily: 'Varies individually'
        },
        sideEffects: ['Low blood sugar', 'Weight gain', 'Injection site reactions'],
        warnings: [
            'Monitor blood sugar regularly',
            'Risk of hypoglycemia if dose too high',
            'Requires refrigeration',
            'Dosing must be individualized'
        ],
        contraindications: ['Hypoglycemia'],
        interactions: ['alcohol', 'beta blockers', 'MAO inhibitors']
    },
    {
        name: 'Glimepiride',
        genericName: 'Glimepiride',
        category: 'Antidiabetic - Sulfonylurea',
        treatsSymptoms: ['type 2 diabetes', 'high blood sugar', 'diabetes'],
        dosage: {
            adult: '1-4mg',
            child: 'Not recommended',
            frequency: 'Once daily with breakfast',
            maxDaily: '8mg'
        },
        sideEffects: ['Low blood sugar', 'Weight gain', 'Nausea', 'Dizziness'],
        warnings: [
            'Take with first meal of the day',
            'Risk of hypoglycemia',
            'Carry glucose tablets'
        ],
        contraindications: ['Type 1 diabetes', 'Diabetic ketoacidosis', 'Kidney disease'],
        interactions: ['beta blockers', 'warfarin', 'NSAIDs']
    },
    {
        name: 'Sitagliptin',
        genericName: 'Sitagliptin',
        category: 'Antidiabetic - DPP-4 inhibitor',
        treatsSymptoms: ['type 2 diabetes', 'high blood sugar'],
        dosage: {
            adult: '100mg',
            child: 'Not recommended',
            frequency: 'Once daily',
            maxDaily: '100mg'
        },
        sideEffects: ['Upper respiratory infection', 'Headache', 'Nausea'],
        warnings: [
            'May cause pancreatitis',
            'Monitor kidney function',
            'Report severe abdominal pain'
        ],
        contraindications: ['Type 1 diabetes', 'Diabetic ketoacidosis'],
        interactions: ['digoxin', 'insulin']
    },
    // ==================== RESPIRATORY ====================
    {
        name: 'Salbutamol',
        genericName: 'Albuterol',
        category: 'Bronchodilator',
        treatsSymptoms: ['asthma', 'wheezing', 'shortness of breath', 'bronchospasm', 'copd'],
        dosage: {
            adult: '1-2 puffs',
            child: '1-2 puffs',
            frequency: 'Every 4-6 hours as needed',
            maxDaily: '8-12 puffs'
        },
        sideEffects: ['Tremor', 'Rapid heartbeat', 'Nervousness', 'Headache'],
        warnings: [
            'Rinse mouth after use',
            'Seek immediate help if symptoms worsen',
            'Do not exceed recommended dose'
        ],
        contraindications: ['Hypersensitivity to albuterol'],
        interactions: ['beta blockers', 'digoxin', 'MAO inhibitors']
    },
    {
        name: 'Montelukast',
        genericName: 'Montelukast',
        category: 'Leukotriene receptor antagonist',
        treatsSymptoms: ['asthma', 'allergic rhinitis', 'hay fever', 'exercise-induced bronchoconstriction'],
        dosage: {
            adult: '10mg',
            child: '4-5mg (based on age)',
            frequency: 'Once daily in evening',
            maxDaily: '10mg'
        },
        sideEffects: ['Headache', 'Stomach pain', 'Fatigue', 'Mood changes'],
        warnings: [
            'Take in evening',
            'Not for acute asthma attacks',
            'May cause neuropsychiatric effects'
        ],
        contraindications: ['Hypersensitivity'],
        interactions: ['phenobarbital', 'rifampin']
    },
    {
        name: 'Prednisolone',
        genericName: 'Prednisolone',
        category: 'Corticosteroid',
        treatsSymptoms: ['inflammation', 'asthma', 'allergy', 'arthritis', 'autoimmune conditions'],
        dosage: {
            adult: '5-60mg',
            child: '1-2mg/kg',
            frequency: 'Once daily in morning',
            maxDaily: 'Varies by condition'
        },
        sideEffects: ['Weight gain', 'Mood changes', 'Increased appetite', 'Insomnia'],
        warnings: [
            'Do not stop suddenly',
            'Take with food',
            'May increase infection risk',
            'Long-term use has many side effects'
        ],
        contraindications: ['Systemic fungal infections', 'Live vaccines'],
        interactions: ['NSAIDs', 'warfarin', 'diabetes medications']
    },
    {
        name: 'Dextromethorphan',
        genericName: 'Dextromethorphan',
        category: 'Cough suppressant',
        treatsSymptoms: ['cough', 'dry cough', 'cold', 'flu'],
        dosage: {
            adult: '10-20mg',
            child: '5-10mg (6+ years)',
            frequency: 'Every 4-6 hours',
            maxDaily: '120mg'
        },
        sideEffects: ['Drowsiness', 'Dizziness', 'Nausea', 'Stomach upset'],
        warnings: [
            'Not for productive (mucus) cough',
            'Avoid alcohol',
            'Do not use with MAO inhibitors'
        ],
        contraindications: ['Chronic bronchitis', 'Emphysema', 'MAO inhibitor use'],
        interactions: ['MAO inhibitors', 'SSRIs', 'fluoxetine']
    },
    // ==================== MENTAL HEALTH ====================
    {
        name: 'Sertraline',
        genericName: 'Sertraline',
        category: 'SSRI - Antidepressant',
        treatsSymptoms: ['depression', 'anxiety', 'ocd', 'panic disorder', 'ptsd'],
        dosage: {
            adult: '50-200mg',
            child: 'Consult doctor',
            frequency: 'Once daily',
            maxDaily: '200mg'
        },
        sideEffects: ['Nausea', 'Diarrhea', 'Insomnia', 'Sexual dysfunction'],
        warnings: [
            'Takes 4-6 weeks for full effect',
            'Do not stop suddenly',
            'May increase suicidal thoughts in young adults initially'
        ],
        contraindications: ['MAO inhibitor use (within 14 days)', 'Pimozide use'],
        interactions: ['MAO inhibitors', 'warfarin', 'NSAIDs', 'tramadol']
    },
    {
        name: 'Fluoxetine',
        genericName: 'Fluoxetine',
        category: 'SSRI - Antidepressant',
        treatsSymptoms: ['depression', 'anxiety', 'ocd', 'bulimia', 'panic disorder'],
        dosage: {
            adult: '20-80mg',
            child: 'Consult doctor',
            frequency: 'Once daily in morning',
            maxDaily: '80mg'
        },
        sideEffects: ['Nausea', 'Insomnia', 'Headache', 'Sexual dysfunction'],
        warnings: [
            'Takes several weeks to work',
            'Do not stop suddenly',
            'May cause activation/restlessness initially'
        ],
        contraindications: ['MAO inhibitor use', 'Thioridazine use'],
        interactions: ['MAO inhibitors', 'warfarin', 'NSAIDs', 'tamoxifen']
    },
    {
        name: 'Alprazolam',
        genericName: 'Alprazolam',
        category: 'Benzodiazepine - Anxiolytic',
        treatsSymptoms: ['anxiety', 'panic disorder', 'stress'],
        dosage: {
            adult: '0.25-0.5mg',
            child: 'Not recommended',
            frequency: '2-3 times daily',
            maxDaily: '4mg'
        },
        sideEffects: ['Drowsiness', 'Dizziness', 'Memory problems', 'Confusion'],
        warnings: [
            'High potential for dependence',
            'Do not stop suddenly',
            'Avoid alcohol',
            'Do not drive or operate machinery'
        ],
        contraindications: ['Acute narrow-angle glaucoma', 'Pregnancy', 'Respiratory depression'],
        interactions: ['alcohol', 'opioids', 'ketoconazole', 'other CNS depressants']
    },
    {
        name: 'Zolpidem',
        genericName: 'Zolpidem',
        category: 'Sedative-hypnotic',
        treatsSymptoms: ['insomnia', 'sleep problems', 'difficulty falling asleep'],
        dosage: {
            adult: '5-10mg',
            child: 'Not recommended',
            frequency: 'Once daily at bedtime',
            maxDaily: '10mg'
        },
        sideEffects: ['Drowsiness', 'Dizziness', 'Headache', 'Daytime drowsiness'],
        warnings: [
            'Take only when you can get 7-8 hours of sleep',
            'May cause sleepwalking or sleep-eating',
            'Risk of dependence',
            'Take on empty stomach'
        ],
        contraindications: ['Sleep apnea', 'Severe liver disease', 'Myasthenia gravis'],
        interactions: ['alcohol', 'CNS depressants', 'rifampin']
    },
    // ==================== VITAMINS & SUPPLEMENTS ====================
    {
        name: 'Vitamin D',
        genericName: 'Cholecalciferol',
        category: 'Vitamin supplement',
        treatsSymptoms: ['vitamin d deficiency', 'bone health', 'osteoporosis prevention', 'immunity support'],
        dosage: {
            adult: '1000-2000 IU',
            child: '400-600 IU',
            frequency: 'Once daily',
            maxDaily: '4000 IU (without medical supervision)'
        },
        sideEffects: ['Nausea', 'Constipation', 'Weakness (with excessive intake)'],
        warnings: [
            'Take with food for better absorption',
            'Monitor levels with long-term high-dose use',
            'Excessive intake can be toxic'
        ],
        contraindications: ['Hypercalcemia', 'Vitamin D toxicity'],
        interactions: ['thiazide diuretics', 'digoxin', 'corticosteroids']
    },
    {
        name: 'Vitamin B12',
        genericName: 'Cyanocobalamin',
        category: 'Vitamin supplement',
        treatsSymptoms: ['vitamin b12 deficiency', 'anemia', 'fatigue', 'nerve health'],
        dosage: {
            adult: '2.4 mcg (RDA), 1000 mcg for deficiency',
            child: '0.9-1.8 mcg',
            frequency: 'Once daily',
            maxDaily: 'No established upper limit'
        },
        sideEffects: ['Rare - may include headache, anxiety, nausea'],
        warnings: [
            'Absorption may be impaired in elderly',
            'Metformin may reduce B12 levels',
            'Consider sublingual form for better absorption'
        ],
        contraindications: ['Cobalt allergy'],
        interactions: ['metformin', 'proton pump inhibitors', 'H2 blockers']
    },
    {
        name: 'Folic Acid',
        genericName: 'Folate',
        category: 'Vitamin supplement',
        treatsSymptoms: ['folate deficiency', 'anemia', 'pregnancy nutrition', 'birth defect prevention'],
        dosage: {
            adult: '400-800 mcg',
            child: '150-400 mcg',
            frequency: 'Once daily',
            maxDaily: '1000 mcg'
        },
        sideEffects: ['Rare - may include nausea, bloating'],
        warnings: [
            'Essential during pregnancy',
            'May mask B12 deficiency',
            'Do not exceed recommended dose'
        ],
        contraindications: ['Undiagnosed B12 deficiency'],
        interactions: ['methotrexate', 'phenytoin', 'metformin']
    },
    {
        name: 'Calcium',
        genericName: 'Calcium carbonate',
        category: 'Mineral supplement',
        treatsSymptoms: ['calcium deficiency', 'bone health', 'osteoporosis prevention', 'heartburn'],
        dosage: {
            adult: '500-600mg',
            child: '500-1300mg',
            frequency: '1-2 times daily with food',
            maxDaily: '2000-2500mg'
        },
        sideEffects: ['Constipation', 'Bloating', 'Gas'],
        warnings: [
            'Take with food for better absorption',
            'Separate from other medications by 2 hours',
            'Avoid excessive intake'
        ],
        contraindications: ['Hypercalcemia', 'Kidney stones'],
        interactions: ['fluoroquinolones', 'tetracyclines', 'levothyroxine', 'bisphosphonates']
    },
    {
        name: 'Iron',
        genericName: 'Ferrous sulfate',
        category: 'Mineral supplement',
        treatsSymptoms: ['iron deficiency', 'anemia', 'fatigue', 'weakness'],
        dosage: {
            adult: '65mg elemental iron',
            child: '1-2mg/kg',
            frequency: 'Once or twice daily',
            maxDaily: '45mg (adults without deficiency)'
        },
        sideEffects: ['Constipation', 'Nausea', 'Dark stools', 'Stomach upset'],
        warnings: [
            'Take on empty stomach for best absorption',
            'May be taken with vitamin C to enhance absorption',
            'Keep away from children - overdose is dangerous'
        ],
        contraindications: ['Hemochromatosis', 'Hemosiderosis'],
        interactions: ['tetracyclines', 'fluoroquinolones', 'levothyroxine', 'antacids']
    },
    {
        name: 'Multivitamin',
        genericName: 'Multiple vitamins and minerals',
        category: 'Vitamin/Mineral supplement',
        treatsSymptoms: ['nutritional deficiency', 'vitamin deficiency', 'general health support'],
        dosage: {
            adult: 'One tablet/capsule',
            child: 'Age-appropriate formulation',
            frequency: 'Once daily',
            maxDaily: 'One dose'
        },
        sideEffects: ['Upset stomach', 'Headache', 'Unusual taste'],
        warnings: [
            'Take with food to reduce stomach upset',
            'Does not replace balanced diet',
            'Check for allergens'
        ],
        contraindications: ['Specific vitamin allergies'],
        interactions: ['Varies based on components - may interact with medications']
    },
    // ==================== ADDITIONAL CARDIOVASCULAR ====================
    {
        name: 'Atorvastatin',
        genericName: 'Atorvastatin',
        category: 'Statin - Cholesterol lowering',
        treatsSymptoms: ['high cholesterol', 'heart disease prevention', 'cardiovascular risk reduction', 'stroke prevention'],
        dosage: {
            adult: '10-80mg',
            child: 'Consult doctor',
            frequency: 'Once daily',
            maxDaily: '80mg'
        },
        sideEffects: ['Muscle pain', 'Nausea', 'Diarrhea', 'Joint pain'],
        warnings: [
            'Report unexplained muscle pain immediately',
            'Avoid grapefruit juice',
            'Regular liver function tests recommended',
            'May increase blood sugar'
        ],
        contraindications: ['Pregnancy', 'Active liver disease', 'Breastfeeding'],
        interactions: ['grapefruit juice', 'gemfibrozil', 'cyclosporine', 'warfarin']
    },
    {
        name: 'Lisinopril',
        genericName: 'Lisinopril',
        category: 'ACE inhibitor',
        treatsSymptoms: ['high blood pressure', 'hypertension', 'heart failure', 'post heart attack'],
        dosage: {
            adult: '10-40mg',
            child: '0.07mg/kg (6+ years)',
            frequency: 'Once daily',
            maxDaily: '40mg'
        },
        sideEffects: ['Dry cough', 'Dizziness', 'Headache', 'Fatigue'],
        warnings: [
            'May cause persistent dry cough',
            'Monitor kidney function',
            'Avoid in pregnancy - can harm fetus',
            'Rise slowly from sitting/lying'
        ],
        contraindications: ['Pregnancy', 'Angioedema history', 'Bilateral renal artery stenosis'],
        interactions: ['potassium supplements', 'NSAIDs', 'lithium', 'aliskiren']
    },
    {
        name: 'Metoprolol',
        genericName: 'Metoprolol',
        category: 'Beta blocker',
        treatsSymptoms: ['high blood pressure', 'angina', 'heart failure', 'irregular heartbeat', 'post heart attack'],
        dosage: {
            adult: '50-100mg',
            child: 'Consult doctor',
            frequency: 'Once or twice daily',
            maxDaily: '400mg'
        },
        sideEffects: ['Fatigue', 'Dizziness', 'Depression', 'Slow heartbeat'],
        warnings: [
            'Do not stop suddenly - may worsen condition',
            'May mask signs of low blood sugar',
            'Can worsen asthma symptoms'
        ],
        contraindications: ['Severe bradycardia', 'Heart block', 'Cardiogenic shock'],
        interactions: ['verapamil', 'diltiazem', 'insulin', 'epinephrine']
    },
    {
        name: 'Warfarin',
        genericName: 'Warfarin',
        category: 'Anticoagulant - Blood thinner',
        treatsSymptoms: ['blood clot prevention', 'stroke prevention', 'atrial fibrillation', 'deep vein thrombosis'],
        dosage: {
            adult: '2-10mg (individualized)',
            child: 'Highly individualized',
            frequency: 'Once daily',
            maxDaily: 'Varies - based on INR'
        },
        sideEffects: ['Bleeding', 'Bruising', 'Nausea', 'Red/dark urine'],
        warnings: [
            'Regular INR monitoring required',
            'Consistent vitamin K intake needed',
            'Report any unusual bleeding',
            'Many drug and food interactions'
        ],
        contraindications: ['Active bleeding', 'Pregnancy', 'Severe uncontrolled hypertension'],
        interactions: ['aspirin', 'NSAIDs', 'antibiotics', 'cranberry juice', 'vitamin K']
    },
    {
        name: 'Hydrochlorothiazide',
        genericName: 'Hydrochlorothiazide',
        category: 'Thiazide diuretic',
        treatsSymptoms: ['high blood pressure', 'fluid retention', 'edema', 'heart failure'],
        dosage: {
            adult: '12.5-50mg',
            child: '1-2mg/kg',
            frequency: 'Once daily in morning',
            maxDaily: '50mg'
        },
        sideEffects: ['Frequent urination', 'Dizziness', 'Muscle cramps', 'Low potassium'],
        warnings: [
            'Take in morning to avoid nighttime urination',
            'May increase blood sugar',
            'Monitor electrolytes regularly',
            'Increase sun sensitivity'
        ],
        contraindications: ['Anuria', 'Sulfa allergy'],
        interactions: ['lithium', 'digoxin', 'NSAIDs', 'diabetes medications']
    },
    // ==================== ENDOCRINE/THYROID ====================
    {
        name: 'Levothyroxine',
        genericName: 'Levothyroxine',
        category: 'Thyroid hormone',
        treatsSymptoms: ['hypothyroidism', 'low thyroid', 'fatigue', 'weight gain', 'thyroid hormone deficiency'],
        dosage: {
            adult: '25-200 mcg',
            child: 'Based on weight and age',
            frequency: 'Once daily on empty stomach',
            maxDaily: 'Individualized'
        },
        sideEffects: ['Weight loss', 'Tremor', 'Headache', 'Insomnia'],
        warnings: [
            'Take on empty stomach 30-60 min before breakfast',
            'Separate from calcium/iron by 4 hours',
            'Regular thyroid function tests needed',
            'Dosage is highly individualized'
        ],
        contraindications: ['Uncorrected adrenal insufficiency', 'Recent heart attack'],
        interactions: ['calcium', 'iron', 'antacids', 'soy products', 'warfarin']
    },
    // ==================== ADDITIONAL ANTIBIOTICS ====================
    {
        name: 'Levofloxacin',
        genericName: 'Levofloxacin',
        category: 'Antibiotic - Fluoroquinolone',
        treatsSymptoms: ['bacterial infection', 'pneumonia', 'urinary tract infection', 'sinusitis', 'bronchitis'],
        dosage: {
            adult: '250-750mg',
            child: 'Generally not recommended',
            frequency: 'Once daily',
            maxDaily: '750mg'
        },
        sideEffects: ['Nausea', 'Diarrhea', 'Headache', 'Dizziness'],
        warnings: [
            'May cause tendon rupture',
            'Avoid sunlight exposure',
            'Increased risk in elderly',
            'Complete full course'
        ],
        contraindications: ['Children under 18', 'Pregnancy', 'Tendon disorders'],
        interactions: ['antacids', 'iron', 'warfarin', 'NSAIDs']
    },
    {
        name: 'Clindamycin',
        genericName: 'Clindamycin',
        category: 'Antibiotic - Lincosamide',
        treatsSymptoms: ['bacterial infection', 'skin infection', 'dental infection', 'bone infection', 'acne'],
        dosage: {
            adult: '150-450mg',
            child: '8-25mg/kg/day',
            frequency: 'Every 6-8 hours',
            maxDaily: '1800mg'
        },
        sideEffects: ['Diarrhea', 'Nausea', 'Rash', 'Abdominal pain'],
        warnings: [
            'May cause severe diarrhea (C. diff)',
            'Report persistent diarrhea immediately',
            'Complete full course',
            'Take with full glass of water'
        ],
        contraindications: ['Previous C. difficile infection', 'Severe liver disease'],
        interactions: ['erythromycin', 'warfarin']
    },
    // ==================== ADDITIONAL PAIN MEDICATIONS ====================
    {
        name: 'Tramadol',
        genericName: 'Tramadol',
        category: 'Opioid pain reliever',
        treatsSymptoms: ['moderate pain', 'chronic pain', 'post-surgical pain'],
        dosage: {
            adult: '50-100mg',
            child: 'Not recommended under 12',
            frequency: 'Every 4-6 hours as needed',
            maxDaily: '400mg'
        },
        sideEffects: ['Dizziness', 'Nausea', 'Constipation', 'Drowsiness'],
        warnings: [
            'Risk of addiction and abuse',
            'Do not drive or operate machinery',
            'Avoid alcohol',
            'May cause seizures'
        ],
        contraindications: ['Respiratory depression', 'Acute intoxication', 'MAO inhibitor use'],
        interactions: ['SSRIs', 'MAO inhibitors', 'warfarin', 'carbamazepine']
    },
    {
        name: 'Gabapentin',
        genericName: 'Gabapentin',
        category: 'Anticonvulsant - Nerve pain',
        treatsSymptoms: ['neuropathic pain', 'nerve pain', 'seizures', 'shingles pain', 'diabetic neuropathy'],
        dosage: {
            adult: '300-900mg',
            child: '10-15mg/kg',
            frequency: 'Three times daily',
            maxDaily: '3600mg'
        },
        sideEffects: ['Dizziness', 'Drowsiness', 'Fatigue', 'Peripheral edema'],
        warnings: [
            'Do not stop suddenly',
            'May cause drowsiness - avoid driving',
            'Gradual dose tapering required',
            'May increase suicidal thoughts'
        ],
        contraindications: ['Hypersensitivity'],
        interactions: ['antacids', 'morphine', 'hydrocodone']
    },
    {
        name: 'Meloxicam',
        genericName: 'Meloxicam',
        category: 'NSAID',
        treatsSymptoms: ['arthritis', 'osteoarthritis', 'rheumatoid arthritis', 'joint pain', 'inflammation'],
        dosage: {
            adult: '7.5-15mg',
            child: '0.125mg/kg (2+ years)',
            frequency: 'Once daily with food',
            maxDaily: '15mg'
        },
        sideEffects: ['Stomach upset', 'Diarrhea', 'Dizziness', 'Headache'],
        warnings: [
            'Take with food',
            'Increased cardiovascular risk',
            'May cause stomach ulcers',
            'Monitor kidney function'
        ],
        contraindications: ['Active ulcer', 'Recent heart surgery', 'Severe kidney disease'],
        interactions: ['aspirin', 'warfarin', 'ACE inhibitors', 'lithium']
    },
    // ==================== ADDITIONAL MENTAL HEALTH ====================
    {
        name: 'Escitalopram',
        genericName: 'Escitalopram',
        category: 'SSRI - Antidepressant',
        treatsSymptoms: ['depression', 'anxiety', 'generalized anxiety disorder', 'panic disorder'],
        dosage: {
            adult: '10-20mg',
            child: '10mg (12+ years)',
            frequency: 'Once daily',
            maxDaily: '20mg'
        },
        sideEffects: ['Nausea', 'Insomnia', 'Fatigue', 'Sexual dysfunction'],
        warnings: [
            'Takes 4-6 weeks for full effect',
            'Do not stop suddenly',
            'May increase suicidal thoughts initially',
            'Avoid alcohol'
        ],
        contraindications: ['MAO inhibitor use (within 14 days)', 'Pimozide use'],
        interactions: ['MAO inhibitors', 'NSAIDs', 'warfarin', 'tramadol']
    },
    {
        name: 'Bupropion',
        genericName: 'Bupropion',
        category: 'Antidepressant - NDRI',
        treatsSymptoms: ['depression', 'seasonal affective disorder', 'smoking cessation'],
        dosage: {
            adult: '150-450mg',
            child: 'Not recommended',
            frequency: 'Once or twice daily',
            maxDaily: '450mg'
        },
        sideEffects: ['Dry mouth', 'Insomnia', 'Headache', 'Nausea'],
        warnings: [
            'Lower seizure threshold',
            'Do not use for eating disorders',
            'Avoid alcohol',
            'May cause agitation'
        ],
        contraindications: ['Seizure disorder', 'Eating disorders', 'MAO inhibitor use'],
        interactions: ['MAO inhibitors', 'SSRIs', 'antipsychotics']
    },
    {
        name: 'Trazodone',
        genericName: 'Trazodone',
        category: 'Antidepressant - SARI',
        treatsSymptoms: ['depression', 'insomnia', 'anxiety', 'sleep problems'],
        dosage: {
            adult: '50-300mg',
            child: 'Consult doctor',
            frequency: 'Once daily at bedtime',
            maxDaily: '400mg'
        },
        sideEffects: ['Drowsiness', 'Dizziness', 'Dry mouth', 'Blurred vision'],
        warnings: [
            'Commonly used off-label for insomnia',
            'Take at bedtime',
            'May cause priapism (rare)',
            'Do not stop suddenly'
        ],
        contraindications: ['Recent heart attack', 'MAO inhibitor use'],
        interactions: ['MAO inhibitors', 'warfarin', 'digoxin', 'phenytoin']
    },
    {
        name: 'Duloxetine',
        genericName: 'Duloxetine',
        category: 'SNRI - Antidepressant',
        treatsSymptoms: ['depression', 'anxiety', 'fibromyalgia', 'neuropathic pain', 'chronic pain'],
        dosage: {
            adult: '30-60mg',
            child: '7+ years for anxiety',
            frequency: 'Once daily',
            maxDaily: '120mg'
        },
        sideEffects: ['Nausea', 'Dry mouth', 'Drowsiness', 'Fatigue'],
        warnings: [
            'Do not stop suddenly',
            'May increase blood pressure',
            'Monitor liver function',
            'Takes several weeks to work'
        ],
        contraindications: ['Uncontrolled glaucoma', 'MAO inhibitor use', 'Severe liver disease'],
        interactions: ['MAO inhibitors', 'SSRIs', 'warfarin', 'NSAIDs']
    },
    {
        name: 'Venlafaxine',
        genericName: 'Venlafaxine',
        category: 'SNRI - Antidepressant',
        treatsSymptoms: ['depression', 'anxiety', 'panic disorder', 'social anxiety'],
        dosage: {
            adult: '75-225mg',
            child: 'Not recommended',
            frequency: 'Once daily with food',
            maxDaily: '375mg'
        },
        sideEffects: ['Nausea', 'Dizziness', 'Insomnia', 'Sweating'],
        warnings: [
            'May increase blood pressure',
            'Do not stop suddenly',
            'Regular blood pressure monitoring',
            'May increase suicidal thoughts'
        ],
        contraindications: ['Uncontrolled hypertension', 'MAO inhibitor use'],
        interactions: ['MAO inhibitors', 'warfarin', 'tramadol', 'SSRIs']
    },
    {
        name: 'Buspirone',
        genericName: 'Buspirone',
        category: 'Anxiolytic - Non-benzodiazepine',
        treatsSymptoms: ['anxiety', 'generalized anxiety disorder'],
        dosage: {
            adult: '15-30mg',
            child: 'Not established',
            frequency: 'Two to three times daily',
            maxDaily: '60mg'
        },
        sideEffects: ['Dizziness', 'Nausea', 'Headache', 'Nervousness'],
        warnings: [
            'Takes 2-4 weeks for full effect',
            'Not for acute anxiety',
            'Avoid grapefruit juice',
            'Low abuse potential'
        ],
        contraindications: ['MAO inhibitor use'],
        interactions: ['MAO inhibitors', 'erythromycin', 'grapefruit juice']
    },
    // ==================== ADDITIONAL GASTROINTESTINAL ====================
    {
        name: 'Lansoprazole',
        genericName: 'Lansoprazole',
        category: 'Proton pump inhibitor',
        treatsSymptoms: ['acid reflux', 'gerd', 'heartburn', 'ulcer', 'erosive esophagitis'],
        dosage: {
            adult: '15-30mg',
            child: '15mg (1-11 years)',
            frequency: 'Once daily before meals',
            maxDaily: '30mg'
        },
        sideEffects: ['Headache', 'Nausea', 'Diarrhea', 'Abdominal pain'],
        warnings: [
            'Take before meals',
            'Long-term use may affect bone health',
            'May mask symptoms of cancer',
            'Do not crush capsules'
        ],
        contraindications: ['Severe liver disease'],
        interactions: ['atazanavir', 'warfarin', 'methotrexate']
    },
    {
        name: 'Ondansetron',
        genericName: 'Ondansetron',
        category: 'Antiemetic - 5-HT3 antagonist',
        treatsSymptoms: ['nausea', 'vomiting', 'chemotherapy nausea', 'post-operative nausea'],
        dosage: {
            adult: '4-8mg',
            child: '4mg (4+ years)',
            frequency: 'Three times daily or as needed',
            maxDaily: '24mg'
        },
        sideEffects: ['Headache', 'Constipation', 'Dizziness', 'Fatigue'],
        warnings: [
            'May cause heart rhythm changes',
            'Use lowest effective dose',
            'Not for nausea caused by motion sickness'
        ],
        contraindications: ['Congenital long QT syndrome', 'Apomorphine use'],
        interactions: ['apomorphine', 'tramadol', 'SSRIs']
    },
    // ==================== UROLOGICAL ====================
    {
        name: 'Tamsulosin',
        genericName: 'Tamsulosin',
        category: 'Alpha blocker',
        treatsSymptoms: ['enlarged prostate', 'bph', 'urinary retention', 'difficulty urinating'],
        dosage: {
            adult: '0.4mg',
            child: 'Not recommended',
            frequency: 'Once daily 30 min after same meal',
            maxDaily: '0.8mg'
        },
        sideEffects: ['Dizziness', 'Runny nose', 'Abnormal ejaculation', 'Headache'],
        warnings: [
            'Rise slowly from sitting/lying',
            'Take after same meal each day',
            'May cause dizziness',
            'Inform eye surgeon before cataract surgery'
        ],
        contraindications: ['Severe liver disease'],
        interactions: ['other alpha blockers', 'PDE5 inhibitors', 'warfarin']
    },
    {
        name: 'Finasteride',
        genericName: 'Finasteride',
        category: '5-alpha reductase inhibitor',
        treatsSymptoms: ['enlarged prostate', 'bph', 'male pattern baldness', 'hair loss'],
        dosage: {
            adult: '1mg (hair loss), 5mg (BPH)',
            child: 'Not recommended',
            frequency: 'Once daily',
            maxDaily: '5mg'
        },
        sideEffects: ['Decreased libido', 'Erectile dysfunction', 'Decreased ejaculate volume'],
        warnings: [
            'Takes 3-6 months for hair growth',
            'Women should not handle crushed tablets if pregnant',
            'May affect PSA levels',
            'Effects reverse when stopped'
        ],
        contraindications: ['Pregnancy', 'Children'],
        interactions: ['None significant']
    },
    // ==================== TOPICAL/DERMATOLOGICAL ====================
    {
        name: 'Hydrocortisone',
        genericName: 'Hydrocortisone',
        category: 'Topical corticosteroid',
        treatsSymptoms: ['skin inflammation', 'eczema', 'rash', 'itching', 'dermatitis', 'allergic reactions'],
        dosage: {
            adult: 'Apply thin layer',
            child: 'Use as directed',
            frequency: '2-4 times daily',
            maxDaily: 'Varies by formulation'
        },
        sideEffects: ['Skin thinning', 'Burning', 'Itching', 'Dryness'],
        warnings: [
            'Do not use on face long-term',
            'Avoid occlusive dressings',
            'Do not use on broken skin',
            'Limit duration of use'
        ],
        contraindications: ['Viral skin infections', 'Fungal infections', 'Tuberculosis of skin'],
        interactions: ['None significant for topical use']
    },
    {
        name: 'Mupirocin',
        genericName: 'Mupirocin',
        category: 'Topical antibiotic',
        treatsSymptoms: ['skin infection', 'impetigo', 'bacterial skin infection', 'wound infection'],
        dosage: {
            adult: 'Apply small amount',
            child: 'Apply small amount',
            frequency: 'Three times daily',
            maxDaily: 'As directed'
        },
        sideEffects: ['Burning', 'Stinging', 'Itching', 'Rash'],
        warnings: [
            'For external use only',
            'Complete full course',
            'Cover with gauze if needed',
            'Avoid contact with eyes'
        ],
        contraindications: ['Polyethylene glycol allergy (for some formulations)'],
        interactions: ['None significant']
    },
    // ==================== ASTHMA/COPD ====================
    {
        name: 'Fluticasone',
        genericName: 'Fluticasone',
        category: 'Inhaled corticosteroid',
        treatsSymptoms: ['asthma', 'allergic rhinitis', 'copd', 'nasal allergies'],
        dosage: {
            adult: '88-880 mcg (inhaler), 1-2 sprays (nasal)',
            child: 'Age-appropriate dose',
            frequency: 'Twice daily',
            maxDaily: 'Varies by formulation'
        },
        sideEffects: ['Hoarseness', 'Thrush', 'Headache', 'Nosebleeds (nasal)'],
        warnings: [
            'Rinse mouth after inhaler use',
            'Not for acute attacks',
            'Regular use needed for effectiveness',
            'May slow growth in children'
        ],
        contraindications: ['Untreated fungal infections'],
        interactions: ['ritonavir', 'ketoconazole']
    },
    {
        name: 'Ipratropium',
        genericName: 'Ipratropium',
        category: 'Anticholinergic bronchodilator',
        treatsSymptoms: ['copd', 'bronchospasm', 'runny nose', 'chronic bronchitis'],
        dosage: {
            adult: '2 puffs (inhaler), 2 sprays (nasal)',
            child: '1-2 puffs/sprays',
            frequency: 'Every 6-8 hours',
            maxDaily: '12 puffs'
        },
        sideEffects: ['Dry mouth', 'Cough', 'Headache', 'Dizziness'],
        warnings: [
            'Not for acute bronchospasm alone',
            'Avoid getting in eyes',
            'May cause urinary retention',
            'Shake well before use'
        ],
        contraindications: ['Soy/peanut allergy (some formulations)', 'Narrow-angle glaucoma'],
        interactions: ['Other anticholinergics']
    },
    // ==================== MISCELLANEOUS ====================
    {
        name: 'Allopurinol',
        genericName: 'Allopurinol',
        category: 'Xanthine oxidase inhibitor',
        treatsSymptoms: ['gout', 'high uric acid', 'kidney stones', 'gout prevention'],
        dosage: {
            adult: '100-800mg',
            child: '10mg/kg',
            frequency: 'Once daily after meals',
            maxDaily: '800mg'
        },
        sideEffects: ['Rash', 'Nausea', 'Diarrhea', 'Drowsiness'],
        warnings: [
            'May initially worsen gout - use with colchicine',
            'Drink plenty of fluids',
            'Report rash immediately',
            'Regular blood tests needed'
        ],
        contraindications: ['Severe rash history', 'HLA-B*5801 positive (Asian descent)'],
        interactions: ['azathioprine', 'mercaptopurine', 'warfarin', 'ampicillin']
    },
    {
        name: 'Colchicine',
        genericName: 'Colchicine',
        category: 'Anti-gout agent',
        treatsSymptoms: ['gout', 'gout attack', 'acute gout', 'gout flare'],
        dosage: {
            adult: '0.6mg',
            child: 'Not recommended',
            frequency: 'One or twice daily',
            maxDaily: '1.2mg for flares'
        },
        sideEffects: ['Diarrhea', 'Nausea', 'Vomiting', 'Abdominal pain'],
        warnings: [
            'Reduce dose in kidney/liver disease',
            'Do not exceed recommended dose',
            'Many drug interactions',
            'Stop if severe diarrhea'
        ],
        contraindications: ['Severe kidney disease', 'Severe liver disease'],
        interactions: ['statins', 'clarithromycin', 'cyclosporine', 'grapefruit juice']
    },
    {
        name: 'Cyclobenzaprine',
        genericName: 'Cyclobenzaprine',
        category: 'Muscle relaxant',
        treatsSymptoms: ['muscle spasm', 'back pain', 'muscle pain', 'musculoskeletal pain'],
        dosage: {
            adult: '5-10mg',
            child: 'Not recommended under 15',
            frequency: 'Three times daily',
            maxDaily: '30mg'
        },
        sideEffects: ['Drowsiness', 'Dry mouth', 'Dizziness', 'Fatigue'],
        warnings: [
            'Do not drive or operate machinery',
            'Avoid alcohol',
            'Use for short-term only (2-3 weeks)',
            'May cause drowsiness'
        ],
        contraindications: ['Recent heart attack', 'Hyperthyroidism', 'MAO inhibitor use'],
        interactions: ['MAO inhibitors', 'tramadol', 'SSRIs', 'alcohol']
    },
    {
        name: 'Prednisone',
        genericName: 'Prednisone',
        category: 'Oral corticosteroid',
        treatsSymptoms: ['inflammation', 'autoimmune disease', 'asthma', 'allergic reaction', 'arthritis', 'lupus'],
        dosage: {
            adult: '5-60mg',
            child: '0.5-2mg/kg',
            frequency: 'Once daily in morning',
            maxDaily: 'Varies by condition'
        },
        sideEffects: ['Weight gain', 'Mood changes', 'Increased appetite', 'Insomnia', 'High blood sugar'],
        warnings: [
            'Do not stop suddenly - taper dose',
            'Take with food',
            'May suppress immune system',
            'Many side effects with long-term use',
            'Monitor blood sugar and blood pressure'
        ],
        contraindications: ['Systemic fungal infections', 'Live vaccines'],
        interactions: ['NSAIDs', 'warfarin', 'diabetes medications', 'vaccines']
    },
    // ==================== ANTIVIRALS & ANTIFUNGALS ====================
    {
        name: 'Acyclovir',
        genericName: 'Acyclovir',
        category: 'Antiviral',
        treatsSymptoms: ['herpes', 'shingles', 'chickenpox', 'cold sores'],
        dosage: {
            adult: '200-800mg',
            child: '20mg/kg',
            frequency: '2-5 times daily',
            maxDaily: '4000mg'
        },
        sideEffects: ['Nausea', 'Vomiting', 'Diarrhea', 'Headache'],
        warnings: [
            'Drink plenty of fluids',
            'Start treatment as soon as possible',
            'Reduce dose in kidney disease',
            'Does not cure herpes infections'
        ],
        contraindications: ['Hypersensitivity', 'Severe kidney failure'],
        interactions: ['probenecid', 'nephrotoxic drugs']
    },
    {
        name: 'Fluconazole',
        genericName: 'Fluconazole',
        category: 'Antifungal',
        treatsSymptoms: ['yeast infection', 'fungal infection', 'thrush', 'candidiasis'],
        dosage: {
            adult: '150mg (single dose) or 100-200mg daily',
            child: '3-12mg/kg',
            frequency: 'Once daily',
            maxDaily: '800mg'
        },
        sideEffects: ['Nausea', 'Headache', 'Stomach pain', 'Dizziness'],
        warnings: [
            'Report signs of liver problems',
            'Use caution in pregnancy',
            'Many drug interactions',
            'Complete full course for systemic infections'
        ],
        contraindications: ['Hypersensitivity', 'Liver failure'],
        interactions: ['warfarin', 'statins', 'phenytoin', 'cyclosporine']
    },
    {
        name: 'Valacyclovir',
        genericName: 'Valacyclovir',
        category: 'Antiviral',
        treatsSymptoms: ['cold sores', 'genital herpes', 'shingles', 'chickenpox'],
        dosage: {
            adult: '500-1000mg',
            child: 'Consult doctor',
            frequency: '1-3 times daily',
            maxDaily: '4000mg'
        },
        sideEffects: ['Headache', 'Nausea', 'Abdominal pain', 'Dizziness'],
        warnings: [
            'Drink plenty of water',
            'Start immediately at first sign of outbreak',
            'Safety not established in young children',
            'Monitor kidney function'
        ],
        contraindications: ['Hypersensitivity to acyclovir'],
        interactions: ['cimetidine', 'probenecid']
    },
    // ==================== ADDITIONAL CARDIOVASCULAR ====================
    {
        name: 'Furosemide',
        genericName: 'Furosemide',
        category: 'Loop Diuretic',
        treatsSymptoms: ['edema', 'fluid retention', 'swelling', 'heart failure', 'high blood pressure'],
        dosage: {
            adult: '20-80mg',
            child: '1-2mg/kg',
            frequency: 'Once or twice daily',
            maxDaily: '600mg'
        },
        sideEffects: ['Frequent urination', 'Dehydration', 'Low potassium', 'Dizziness'],
        warnings: [
            'May cause significant potassium loss',
            'Take in morning to avoid nighttime urination',
            'Stand up slowly',
            'Monitor electrolytes'
        ],
        contraindications: ['Anuria', 'Hepatic coma', 'Severe electrolyte depletion'],
        interactions: ['digoxin', 'lithium', 'ototoxic drugs', 'NSAIDs']
    },
    {
        name: 'Spironolactone',
        genericName: 'Spironolactone',
        category: 'Potassium-sparing diuretic',
        treatsSymptoms: ['heart failure', 'high blood pressure', 'edema', 'acne', 'PCOS'],
        dosage: {
            adult: '25-100mg',
            child: '1-3mg/kg',
            frequency: 'Once daily',
            maxDaily: '400mg'
        },
        sideEffects: ['High potassium', 'Breast tenderness', 'Dizziness', 'Headache'],
        warnings: [
            'Avoid potassium supplements',
            'Monitor kidney function',
            'May cause hormonal changes',
            'Drink adequate fluids'
        ],
        contraindications: ['Hyperkalemia', 'Severe kidney disease', 'Addison disease'],
        interactions: ['ACE inhibitors', 'ARBs', 'potassium supplements', 'digoxin']
    },
    {
        name: 'Nitroglycerin',
        genericName: 'Nitroglycerin',
        category: 'Nitrate',
        treatsSymptoms: ['angina', 'chest pain', 'heart attack'],
        dosage: {
            adult: '0.3-0.6mg (sublingual)',
            child: 'Not recommended',
            frequency: 'Every 5 min for max 3 doses',
            maxDaily: 'Varies by formulation'
        },
        sideEffects: ['Headache', 'Dizziness', 'Low blood pressure', 'Flushing'],
        warnings: [
            'Do not take with erectile dysfunction meds',
            'Sit down when taking',
            'Keep tablets in original glass bottle',
            'Seek help if pain persists after 3 doses'
        ],
        contraindications: ['Severe anemia', 'Head trauma', 'PDE5 inhibitor use'],
        interactions: ['sildenafil', 'tadalafil', 'vardenafil', 'beta blockers']
    },
    {
        name: 'Digoxin',
        genericName: 'Digoxin',
        category: 'Cardiac glycoside',
        treatsSymptoms: ['heart failure', 'atrial fibrillation', 'irregular heartbeat'],
        dosage: {
            adult: '0.125-0.25mg',
            child: 'Highly individualized',
            frequency: 'Once daily',
            maxDaily: 'Individualized'
        },
        sideEffects: ['Nausea', 'Vision changes', 'Confusion', 'Irregular heartbeat'],
        warnings: [
            'Narrow therapeutic index - toxicity risk',
            'Monitor potassium levels',
            'Regular blood level monitoring',
            'Report yellow/green vision changes'
        ],
        contraindications: ['Ventricular fibrillation', 'Hypersensitivity'],
        interactions: ['amiodarone', 'verapamil', 'diuretics', 'antibiotics']
    },
    {
        name: 'Rivaroxaban',
        genericName: 'Rivaroxaban',
        category: 'Anticoagulant - Factor Xa inhibitor',
        treatsSymptoms: ['blood clot prevention', 'DVT', 'PE', 'atrial fibrillation', 'stroke prevention'],
        dosage: {
            adult: '10-20mg',
            child: 'Consult doctor',
            frequency: 'Once daily with food (20mg)',
            maxDaily: '20mg'
        },
        sideEffects: ['Bleeding', 'Bruising', 'Back pain', 'Stomach pain'],
        warnings: [
            'Increased bleeding risk',
            'Do not stop suddenly',
            'Tell surgeons/dentists you are taking it',
            'Take with food for 15mg and 20mg doses'
        ],
        contraindications: ['Active bleeding', 'Artificial heart valves'],
        interactions: ['ketoconazole', 'ritonavir', 'NSAIDs', 'aspirin']
    },
    // ==================== NEUROLOGICAL ====================
    {
        name: 'Topiramate',
        genericName: 'Topiramate',
        category: 'Anticonvulsant',
        treatsSymptoms: ['seizures', 'epilepsy', 'migraine prevention'],
        dosage: {
            adult: '25-200mg',
            child: '0.5-9mg/kg',
            frequency: 'Twice daily',
            maxDaily: '400mg'
        },
        sideEffects: ['Dizziness', 'Weight loss', 'Tingling', 'Cognitive issues'],
        warnings: [
            'Drink plenty of fluids (kidney stone risk)',
            'Do not stop suddenly',
            'May cause eye problems',
            'Can decrease sweating'
        ],
        contraindications: ['Metabolic acidosis'],
        interactions: ['birth control pills', 'metformin', 'alcohol', 'valproic acid']
    },
    {
        name: 'Levetiracetam',
        genericName: 'Levetiracetam',
        category: 'Anticonvulsant',
        treatsSymptoms: ['seizures', 'epilepsy'],
        dosage: {
            adult: '500-1500mg',
            child: '10-60mg/kg',
            frequency: 'Twice daily',
            maxDaily: '3000mg'
        },
        sideEffects: ['Drowsiness', 'Weakness', 'Irritability', 'Infection'],
        warnings: [
            'Do not stop suddenly',
            'May cause behavioral changes',
            'Use caution driving',
            'Report mood changes'
        ],
        contraindications: ['Hypersensitivity'],
        interactions: ['Usually few interactions']
    },
    {
        name: 'Pregabalin',
        genericName: 'Pregabalin',
        category: 'Anticonvulsant - Nerve pain',
        treatsSymptoms: ['neuropathic pain', 'fibromyalgia', 'nerve pain', 'seizures'],
        dosage: {
            adult: '75-300mg',
            child: 'Not recommended',
            frequency: 'Two to three times daily',
            maxDaily: '600mg'
        },
        sideEffects: ['Dizziness', 'Sleepiness', 'Weight gain', 'Swelling'],
        warnings: [
            'Do not stop suddenly',
            'Risk of abuse',
            'May cause swelling',
            'Report muscle pain'
        ],
        contraindications: ['Hypersensitivity'],
        interactions: ['opioids', 'benzodiazepines', 'alcohol', 'ACE inhibitors']
    }
];
