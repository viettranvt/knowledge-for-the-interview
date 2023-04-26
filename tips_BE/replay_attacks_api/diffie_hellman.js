// PXA regis app

const PXA = 17; // random secret key and save local

// QDVN
const QDVN = 12;

const keySystem = 15; // 1 month change 1 time

const PXA_PUBLIC = keySystem + PXA;
const QDVN_PUBLIC = keySystem + QDVN;

const QDVN_COMMON = PXA_PUBLIC + QDVN; // key common
const PXA_COMMON = QDVN_PUBLIC + PXA; // key common
