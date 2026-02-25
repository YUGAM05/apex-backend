/**
 * Blood Compatibility Matrix
 * Key: Recipient's Blood Group
 * Value: Array of compatible Donor Blood Groups
 */
export const BLOOD_COMPATIBILITY_MAP: Record<string, string[]> = {
    'A+': ['A+', 'A-', 'O+', 'O-'],
    'A-': ['A-', 'O-'],
    'B+': ['B+', 'B-', 'O+', 'O-'],
    'B-': ['B-', 'O-'],
    'AB+': ['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-'],
    'AB-': ['A-', 'B-', 'AB-', 'O-'],
    'O+': ['O+', 'O-'],
    'O-': ['O-']
};

/**
 * Get a list of compatible blood groups for a given recipient blood group.
 * @param recipientBloodGroup The blood group of the person needing blood.
 * @returns Array of compatible donor blood groups.
 */
export const getCompatibleDonors = (recipientBloodGroup: string): string[] => {
    return BLOOD_COMPATIBILITY_MAP[recipientBloodGroup] || [recipientBloodGroup];
};
