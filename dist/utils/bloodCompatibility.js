"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getCompatibleDonors = exports.BLOOD_COMPATIBILITY_MAP = void 0;
/**
 * Blood Compatibility Matrix
 * Key: Recipient's Blood Group
 * Value: Array of compatible Donor Blood Groups
 */
exports.BLOOD_COMPATIBILITY_MAP = {
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
const getCompatibleDonors = (recipientBloodGroup) => {
    return exports.BLOOD_COMPATIBILITY_MAP[recipientBloodGroup] || [recipientBloodGroup];
};
exports.getCompatibleDonors = getCompatibleDonors;
