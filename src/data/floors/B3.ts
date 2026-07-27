const objects = [
  { x: 27.2, y: 10.3, type: 'normal', angle: 90, name: 'C-001' },
  { x: 26.2, y: 10.8, type: 'normal', angle: 90, name: 'C-002' },
  { x: 25.2, y: 10.8, type: 'normal', angle: 90, name: 'C-003' },
  { x: 24.2, y: 10.8, type: 'normal', angle: 90, name: 'C-004' },
  { x: 23.2, y: 10.8, type: 'normal', angle: 90, name: 'C-005' },
  { x: 22.2, y: 10.8, type: 'normal', angle: 90, name: 'C-006' },
  { x: 19, y: 10.8, type: 'normal', angle: 90, name: 'C-007' },
  { x: 18, y: 10.8, type: 'normal', angle: 90, name: 'C-008' },
  { x: 17, y: 10.8, type: 'normal', angle: 90, name: 'C-009' },
  { x: 16, y: 10.8, type: 'normal', angle: 90, name: 'C-010' },
  { x: 15, y: 10.8, type: 'normal', angle: 90, name: 'C-011' },
  { x: 14, y: 10.8, type: 'normal', angle: 90, name: 'C-012' },
  { x: 13, y: 10.8, type: 'normal', angle: 90, name: 'C-013' },

  { x: 11.7, y: 10.8, type: 'normal', angle: 90, name: 'C-014' },
  { x: 10.7, y: 10.8, type: 'normal', angle: 90, name: 'C-015' },
  { x: 9.7, y: 10.8, type: 'normal', angle: 90, name: 'C-016' },
  { x: 8.7, y: 10.8, type: 'normal', angle: 90, name: 'C-017' },
  { x: 7.7, y: 10.8, type: 'normal', angle: 90, name: 'C-018' },
  { x: 4, y: 10.8, type: 'normal', angle: 90, name: 'C-019' },
  { x: 3, y: 10.8, type: 'normal', angle: 90, name: 'C-020' },
  { x: 0.95, y: 10.8, type: 'normal', angle: 90, name: 'C-021' },
  { x: -0.05, y: 10.8, type: 'normal', angle: 90, name: 'C-022' },

  { x: -2.1, y: 10.8, type: 'normal', angle: 90, name: 'C-023' },
  { x: -3.1, y: 10.8, type: 'normal', angle: 90, name: 'C-024' },

  { x: -5.15, y: 10.8, type: 'normal', angle: 90, name: 'C-025' },
  { x: -6.15, y: 10.8, type: 'normal', angle: 90, name: 'C-026' },

  { x: -8.8, y: 10.8, type: 'lift' },

  { x: -15.5, y: 10.8, type: 'normal', angle: 90, name: 'C-027' },
  { x: -16.5, y: 10.8, type: 'normal', angle: 90, name: 'C-028' },
  { x: -17.5, y: 10.8, type: 'normal', angle: 90, name: 'C-029' },
  { x: -18.5, y: 10.8, type: 'normal', angle: 90, name: 'C-030' },
  { x: -22.4, y: 10.8, type: 'normal', angle: 90, name: 'C-031' },
  { x: -23.4, y: 10.8, type: 'normal', angle: 90, name: 'C-032' },
  { x: 28.8, y: 8, type: 'normal', angle: 0, name: 'C-105' },
  { x: 28.8, y: 7, type: 'normal', angle: 0, name: 'C-106' },
  { x: 28.8, y: 6, type: 'normal', angle: 0, name: 'C-107' },
  { x: 28.8, y: 5, type: 'normal', angle: 0, name: 'C-108' },
  { x: 28.8, y: 4, type: 'normal', angle: 0, name: 'C-109' },
  { x: 28.8, y: 3, type: 'normal', angle: 0, name: 'C-110' },
  { x: 28.8, y: 2, type: 'normal', angle: 0, name: 'C-111' },
  { x: 28.8, y: 1, type: 'normal', angle: 0, name: 'C-112' },
  { x: 28.8, y: 0, type: 'normal', angle: 0, name: 'C-113' },
  { x: 28.8, y: -1, type: 'normal', angle: 0, name: 'C-114' },
  { x: 28.8, y: -2, type: 'normal', angle: 0, name: 'C-115' },
  { x: 28.8, y: -3, type: 'normal', angle: 0, name: 'C-116' },
  { x: 28.8, y: -4, type: 'normal', angle: 0, name: 'C-117' },
  { x: 28.8, y: -5, type: 'normal', angle: 0, name: 'C-118' },
  { x: 28.8, y: -6, type: 'normal', angle: 0, name: 'C-119' },
  { x: 28.8, y: -7, type: 'normal', angle: 0, name: 'C-120' },
  { x: 28.8, y: -8, type: 'normal', angle: 0, name: 'C-121' },
  { x: 28.8, y: -9, type: 'normal', angle: 0, name: 'C-122' },

  { x: 22.5, y: 7.7, type: 'normal', angle: 0, name: 'C-083' },
  { x: 22.5, y: 6.7, type: 'normal', angle: 0, name: 'C-084' },
  { x: 22.5, y: 5.7, type: 'normal', angle: 0, name: 'C-085' },
  { x: 22.5, y: 4.7, type: 'normal', angle: 0, name: 'C-086' },
  { x: 22.5, y: 3.7, type: 'normal', angle: 0, name: 'C-087' },
  { x: 22.5, y: 2.7, type: 'normal', angle: 0, name: 'C-088' },
  { x: 22.5, y: 1.7, type: 'normal', angle: 0, name: 'C-089' },
  { x: 22.5, y: 0.7, type: 'normal', angle: 0, name: 'C-090' },
  { x: 22.5, y: -0.3, type: 'normal', angle: 0, name: 'C-091' },
  { x: 22.5, y: -2.7, type: 'normal', angle: 0, name: 'C-092' },
  { x: 22.5, y: -3.7, type: 'normal', angle: 0, name: 'C-093' },

  { x: 22.05, y: -4.5, type: 'mini', angle: 0, name: 'M-30' },
  { x: 21.7, y: -5.3, type: 'mini', angle: 90, name: 'M-31' },
  { x: 23, y: -5.75, type: 'mini', angle: 90, name: 'M-33' },
  { x: 22.5, y: -5.75, type: 'mini', angle: 90, name: 'M-32' },
  { x: 23.75, y: -5.3, type: 'normal', angle: 90, name: 'C-094' },
  { x: 24.75, y: -5.3, type: 'normal', angle: 90, name: 'C-095' },

  { x: 23.2, y: -9.5, type: 'normal', angle: 90, name: 'C-123' },
  { x: 21.5, y: -9.5, type: 'normal', angle: 90, name: 'C-124' },
  { x: 20.5, y: -9.5, type: 'normal', angle: 90, name: 'C-125' },

  { x: 19.0, y: -10.75, type: 'mini', angle: 0, name: 'B-35,36' },
  { x: 19.0, y: -10.3, type: 'mini', angle: 0, name: 'B-33,34' },
  { x: 19.0, y: -9.85, type: 'mini', angle: 0, name: 'B-31,32' },
  { x: 19.0, y: -9.4, type: 'mini', angle: 0, name: 'B-29,30' },
  { x: 19.0, y: -8.95, type: 'mini', angle: 0, name: 'B-27,28' },

  { x: 16.9, y: -10.75, type: 'mini', angle: 0, name: 'B-19,20' },
  { x: 16.9, y: -10.3, type: 'mini', angle: 0, name: 'B-17,18' },
  { x: 16.9, y: -9.85, type: 'mini', angle: 0, name: 'B-15,16' },
  { x: 16.9, y: -9.4, type: 'mini', angle: 0, name: 'B-13,14' },
  { x: 16.9, y: -8.95, type: 'mini', angle: 0, name: 'B-11,12' },
  { x: 16.9, y: -8.5, type: 'mini', angle: 0, name: 'B-09,10' },
  { x: 16.9, y: -8.05, type: 'mini', angle: 0, name: 'B-07,08' },

  { x: 19.0, y: -8.05, type: 'mini', angle: 0, name: 'B-25,26' },
  { x: 19.0, y: -7.6, type: 'mini', angle: 0, name: 'B-23,24' },
  { x: 19.0, y: -7.15, type: 'mini', angle: 0, name: 'B-21,22' },

  { x: 18.55, y: -6.15, type: 'normal', angle: 0, name: 'C-082' },
  { x: 18.55, y: -5.15, type: 'normal', angle: 0, name: 'C-081' },
  { x: 19.1, y: -3.5, type: 'normal', angle: 90, name: 'C-080' },

  { x: 18.7, y: 0.3, type: 'normal', angle: 0, name: 'C-079' },
  { x: 16.6, y: 0.3, type: 'normal', angle: 0, name: 'R-049' },

  { x: 12.5, y: 0.9, type: 'normal', angle: 90, name: 'R-046' },
  { x: 11.5, y: 0.9, type: 'normal', angle: 90, name: 'R-045' },

  { x: 10.1, y: 0.9, type: 'normal', angle: 90, name: 'R-044' },
  { x: 9.1, y: 0.9, type: 'normal', angle: 90, name: 'R-043' },
  { x: 8.1, y: 0.9, type: 'normal', angle: 90, name: 'R-042' },

  { x: 7.4, y: 1.35, type: 'mini', angle: 90, name: 'M-019' },
  { x: 6.9, y: 1.35, type: 'mini', angle: 90, name: 'M-018' },

  { x: 6.1, y: 0.4, type: 'normal', angle: 90, name: 'R-041' },

  { x: 6.1, y: -2.3, type: 'normal', angle: 90, name: 'R-055' },
  { x: 5.1, y: -2.3, type: 'normal', angle: 90, name: 'R-056' },

  { x: 5.25, y: 0.85, type: 'mini', angle: 90, name: 'M-017' },
  { x: 4.75, y: 0.85, type: 'mini', angle: 90, name: 'M-016' },
  { x: 4.25, y: 0.85, type: 'mini', angle: 90, name: 'M-015' },

  { x: 3.1, y: 0.6, type: 'normal', angle: 85, name: 'R-040' },
  { x: 2.1, y: 0.7, type: 'normal', angle: 85, name: 'R-039' },
  { x: 1.1, y: 0.8, type: 'normal', angle: 85, name: 'R-038' },

  { x: -1.1, y: 0.8, type: 'normal', angle: 90, name: 'R-037' },
  { x: -2.4, y: 0.8, type: 'normal', angle: 90, name: 'R-036' },
  { x: -3.4, y: 0.8, type: 'normal', angle: 90, name: 'R-035' },
  { x: -4.4, y: 0.8, type: 'normal', angle: 90, name: 'R-034' },
  { x: -5.4, y: 0.8, type: 'normal', angle: 90, name: 'R-033' },
  { x: -6.8, y: 0.8, type: 'normal', angle: 90, name: 'R-032' },
  { x: -7.8, y: 0.8, type: 'normal', angle: 90, name: 'R-031' },

  { x: -11.2, y: 0.2, type: 'normal', angle: 90, name: 'R-028' },

  { x: -11.2, y: -1.35, type: 'normal', angle: 0, name: 'R-029' },
  { x: -11.2, y: -2.35, type: 'normal', angle: 0, name: 'R-030' },

  { x: -12.2, y: 0.2, type: 'normal', angle: 90, name: 'R-027' },
  { x: -13.2, y: 0.2, type: 'normal', angle: 90, name: 'R-026' },
  { x: -14.2, y: 0.2, type: 'normal', angle: 90, name: 'R-025' },

  { x: -1.1, y: -1.35, type: 'normal', angle: 90, name: 'V-008' },

  { x: -1.1, y: -6.1, type: 'normal', angle: 90, name: 'R-067' },
  { x: -2.1, y: -5.9, type: 'normal', angle: 90, name: 'R-066' },
  { x: -3.1, y: -5.5, type: 'normal', angle: 90, name: 'R-065' },
  { x: -3.85, y: -5.05, type: 'mini', angle: 90, name: 'M-29' },
  { x: -4.35, y: -5.05, type: 'mini', angle: 90, name: 'M-28' },
  { x: -4.85, y: -5.05, type: 'mini', angle: 90, name: 'M-27' },
  { x: -5.35, y: -5.05, type: 'mini', angle: 90, name: 'M-26' },
  { x: -5.85, y: -5.05, type: 'mini', angle: 90, name: 'M-25' },

  { x: -2.4, y: -1.35, type: 'normal', angle: 90, name: 'V-009' },
  { x: -3.4, y: -1.35, type: 'normal', angle: 90, name: 'R-060' },
  { x: -4.4, y: -1.35, type: 'normal', angle: 90, name: 'R-061' },
  { x: -5.4, y: -1.35, type: 'normal', angle: 90, name: 'R-062' },
  { x: -6.8, y: -1.35, type: 'normal', angle: 90, name: 'R-063' },
  { x: -7.8, y: -1.35, type: 'normal', angle: 90, name: 'R-064' },

  { x: 0.8, y: -2.4, type: 'normal', angle: 85, name: 'R-059' },
  { x: 1.8, y: -2.5, type: 'normal', angle: 85, name: 'R-058' },
  { x: 2.8, y: -2.6, type: 'normal', angle: 85, name: 'R-057' },

  { x: 8.1, y: -1.2, type: 'normal', angle: 90, name: 'V-007' },
  { x: 9.1, y: -1.2, type: 'normal', angle: 90, name: 'V-006' },

  { x: 10.1, y: -1.2, type: 'normal', angle: 90, name: 'V-005' },

  { x: 11.5, y: -1.2, type: 'normal', angle: 90, name: 'R-054' },
  { x: 12.5, y: -1.2, type: 'normal', angle: 90, name: 'R-053' },

  { x: 17.4, y: 1.4, type: 'mini', angle: 90, name: 'M-22' },
  { x: 16.95, y: 1.4, type: 'mini', angle: 90, name: 'M-21' },
  { x: 16.5, y: 1.4, type: 'mini', angle: 90, name: 'M-20' },

  { x: 18.7, y: 1.3, type: 'normal', angle: 0, name: 'C-078' },
  { x: 18.7, y: 2.3, type: 'normal', angle: 0, name: 'R-048' },
  { x: 18.7, y: 3.3, type: 'normal', angle: 0, name: 'R-047' },
  { x: 18.7, y: 4.3, type: 'normal', angle: 0, name: 'C-077' },
  { x: 18.7, y: 5.3, type: 'normal', angle: 0, name: 'C-076' },

  { x: 18.6, y: 6.9, type: 'normal', angle: 90, name: 'C-075' },
  { x: 17.6, y: 6.9, type: 'normal', angle: 90, name: 'C-074' },
  { x: 16.6, y: 6.9, type: 'normal', angle: 90, name: 'C-073' },

  { x: 16.6, y: 4.7, type: 'normal', angle: 90, name: 'R-001' },
  { x: 15.6, y: 4.7, type: 'normal', angle: 90, name: 'R-002' },
  { x: 14.6, y: 4.7, type: 'normal', angle: 90, name: 'R-003' },

  { x: 14.6, y: 6.9, type: 'normal', angle: 90, name: 'C-072' },
  { x: 13.6, y: 6.9, type: 'normal', angle: 90, name: 'C-071' },

  { x: 13.6, y: 4.7, type: 'normal', angle: 90, name: 'R-004' },
  { x: 12.6, y: 4.7, type: 'normal', angle: 90, name: 'R-005' },

  { x: 11.6, y: 4.7, type: 'normal', angle: 90, name: 'R-006' },

  { x: 11.6, y: 6.9, type: 'normal', angle: 90, name: 'C-070' },

  { x: 10.9, y: 7.35, type: 'mini', angle: 90, name: 'M-03' },
  { x: 10.3, y: 7.35, type: 'mini', angle: 90, name: 'M-04' },

  { x: 9.6, y: 6.9, type: 'normal', angle: 90, name: 'C-069' },
  { x: 8.6, y: 6.9, type: 'normal', angle: 90, name: 'C-068' },
  { x: 7.6, y: 6.9, type: 'normal', angle: 90, name: 'C-067' },

  { x: 6.3, y: 6.9, type: 'normal', angle: 90, name: 'C-066' },
  { x: 5.3, y: 6.9, type: 'normal', angle: 90, name: 'C-065' },
  { x: 3.6, y: 6.9, type: 'normal', angle: 90, name: 'C-064' },
  { x: 2.6, y: 6.9, type: 'normal', angle: 90, name: 'C-063' },
  { x: 1.6, y: 6.9, type: 'normal', angle: 90, name: 'C-062' },

  { x: -0.5, y: 6.9, type: 'normal', angle: 90, name: 'C-061' },
  { x: -1.5, y: 6.9, type: 'normal', angle: 90, name: 'C-060' },
  { x: -3.1, y: 6.9, type: 'normal', angle: 90, name: 'C-059' },
  { x: -4.1, y: 6.9, type: 'normal', angle: 90, name: 'C-058' },

  { x: -4.1, y: 4.7, type: 'normal', angle: 90, name: 'R-018' },
  { x: -3.1, y: 4.7, type: 'normal', angle: 90, name: 'R-017' },
  { x: -2.1, y: 4.7, type: 'normal', angle: 90, name: 'R-016' },

  { x: -0.1, y: 4.7, type: 'normal', angle: 90, name: 'R-015' },
  { x: 0.9, y: 4.7, type: 'normal', angle: 90, name: 'R-014' },
  { x: 1.9, y: 4.7, type: 'normal', angle: 90, name: 'R-013' },

  { x: 3.15, y: 4.25, type: 'mini', angle: 90, name: 'M-011' },
  { x: 3.65, y: 4.25, type: 'mini', angle: 90, name: 'M-010' },

  { x: 4.4, y: 4.7, type: 'normal', angle: 90, name: 'R-012' },
  { x: 5.4, y: 4.7, type: 'normal', angle: 90, name: 'R-011' },

  { x: 6.15, y: 4.25, type: 'mini', angle: 90, name: 'M-009' },
  { x: 6.65, y: 4.25, type: 'mini', angle: 90, name: 'M-008' },

  { x: -6.4, y: 6.9, type: 'normal', angle: 90, name: 'C-057' },
  { x: -7.4, y: 6.9, type: 'normal', angle: 90, name: 'C-056' },
  { x: -8.4, y: 6.9, type: 'normal', angle: 90, name: 'C-055' },
  { x: -9.4, y: 6.9, type: 'normal', angle: 90, name: 'C-054' },

  { x: -11.2, y: 6.5, type: 'normal', angle: 90, name: 'P-001' },

  { x: -11.6, y: 4.4, type: 'normal', angle: 90, name: 'V-003' },
  { x: -12.6, y: 4.4, type: 'normal', angle: 90, name: 'V-004' },
  { x: -13.6, y: 4.4, type: 'normal', angle: 90, name: 'R-021' },
  { x: -14.6, y: 4.4, type: 'normal', angle: 90, name: 'R-022' },

  { x: -12.2, y: 6.5, type: 'normal', angle: 90, name: 'P-002' },
  { x: -13.2, y: 6.5, type: 'normal', angle: 90, name: 'P-003' },
  { x: -14.2, y: 6.5, type: 'normal', angle: 90, name: 'P-004' },

  { x: -16.2, y: 6.5, type: 'normal', angle: 90, name: 'P-005' },
  { x: -17.2, y: 6.5, type: 'normal', angle: 90, name: 'P-006' },

  { x: -19.9, y: 6.3, type: 'normal', angle: 90, name: 'C-053' },

  { x: -19.6, y: 4.15, type: 'normal', angle: 90, name: 'C-047' },
  { x: -20.6, y: 4.15, type: 'normal', angle: 90, name: 'C-048' },

  { x: -22.2, y: 4.7, type: 'normal', angle: 0, name: 'C-050' },
  { x: -22.2, y: 3.7, type: 'normal', angle: 0, name: 'C-049' },

  { x: -20.9, y: 6.3, type: 'normal', angle: 90, name: 'C-052' },
  { x: -21.9, y: 6.3, type: 'normal', angle: 90, name: 'C-051' },

  { x: -22.65, y: 6.75, type: 'mini', angle: 90, name: 'M-02' },
  { x: -23.15, y: 6.75, type: 'mini', angle: 90, name: 'M-01' },

  { x: -26, y: 6.75, type: 'normal', angle: 90, name: 'C-033' },
  { x: -27, y: 6.0, type: 'normal', angle: 90, name: 'C-034' },

  { x: -16.65, y: 4.95, type: 'normal', angle: 0, name: 'P-007' },
  { x: -16.65, y: 3.95, type: 'normal', angle: 0, name: 'P-008' },
  { x: -16.65, y: 2.9, type: 'normal', angle: 0, name: 'R-023' },
  { x: -16.65, y: 1.9, type: 'normal', angle: 0, name: 'R-024' },

  { x: -18.1, y: -0.3, type: 'lift' },

  { x: -9.4, y: 4.7, type: 'normal', angle: 90, name: 'V-002' },
  { x: -8.4, y: 4.7, type: 'normal', angle: 90, name: 'V-001' },
  { x: -7.4, y: 4.7, type: 'normal', angle: 90, name: 'R-020' },
  { x: -6.4, y: 4.7, type: 'normal', angle: 90, name: 'R-019' },

  { x: 10.6, y: 4.7, type: 'normal', angle: 90, name: 'R-007' },
  { x: 9.6, y: 4.7, type: 'normal', angle: 90, name: 'R-008' },
  { x: 8.6, y: 4.7, type: 'normal', angle: 90, name: 'R-009' },
  { x: 7.6, y: 4.7, type: 'normal', angle: 90, name: 'R-010' },

  { x: 17.4, y: -3.7, type: 'normal', angle: 0, name: 'R-052' },
  { x: 17.4, y: -2.7, type: 'normal', angle: 0, name: 'R-051' },
  { x: 17.4, y: -1.6, type: 'normal', angle: 0, name: 'R-050' },

  { x: 16.6, y: -5.25, type: 'mini', angle: 90, name: 'B-03,04' },
  { x: 17.05, y: -5.25, type: 'mini', angle: 90, name: 'B-01,02' },
  { x: 16.6, y: -6.85, type: 'mini', angle: 90, name: 'B-05,06' },

  { x: 14.2, y: -5.25, type: 'normal', angle: 90, name: 'R-071' },
  { x: 13.2, y: -5.25, type: 'normal', angle: 90, name: 'R-070' },
  { x: 12.2, y: -5.25, type: 'normal', angle: 90, name: 'R-069' },
  { x: 11.2, y: -5.25, type: 'normal', angle: 90, name: 'R-068' },
  { x: 13, y: -7.4, type: 'lift' },
  { x: 10.7, y: -6.9, type: 'normal', angle: 0, name: 'V-013' },

  { x: 7.1, y: -6.3, type: 'normal', angle: 90, name: 'V-012' },

  { x: 7.1, y: -8.6, type: 'normal', angle: 0, name: 'V-016' },

  { x: 7.1, y: -9.6, type: 'normal', angle: 0, name: 'V-017' },

  { x: 6.1, y: -6.3, type: 'normal', angle: 90, name: 'V-011' },
  { x: 5.1, y: -6.3, type: 'normal', angle: 90, name: 'V-010' },

  { x: 10.7, y: -7.9, type: 'normal', angle: 0, name: 'V-014' },
  { x: 10.9, y: -9, type: 'normal', angle: 0, name: 'V-015' },
  { x: 13.5, y: -9.5, type: 'normal', angle: 0, name: 'V-020' },

  { x: 24.6, y: 6.7, type: 'normal', angle: 0, name: 'C-104' },
  { x: 24.6, y: 5.7, type: 'normal', angle: 0, name: 'C-103' },
  { x: 24.6, y: 4.7, type: 'normal', angle: 0, name: 'C-102' },
  { x: 24.6, y: 3.7, type: 'normal', angle: 0, name: 'C-101' },
  { x: 24.6, y: 2.7, type: 'normal', angle: 0, name: 'C-100' },
  { x: 24.6, y: 1.2, type: 'normal', angle: 0, name: 'C-099' },
  { x: 24.6, y: 0.2, type: 'normal', angle: 0, name: 'C-098' },
  { x: 24.6, y: -2.7, type: 'normal', angle: 0, name: 'C-097' },
  { x: 24.6, y: -3.7, type: 'normal', angle: 0, name: 'C-096' },

  { x: 23.8, y: 7.8, type: 'mini', angle: 90, name: 'M-05' },
  { x: 24.3, y: 7.8, type: 'mini', angle: 90, name: 'M-06' },
  { x: 24.8, y: 7.8, type: 'mini', angle: 90, name: 'M-07' },

  { x: -28.6, y: 6.25, type: 'normal', angle: 105, name: 'C-035' },
  { x: -29.55, y: 6, type: 'normal', angle: 105, name: 'C-036' },

  { x: -30.9, y: 4.7, type: 'normal', angle: -4.5, name: 'C-037' },
  { x: -30.98, y: 3.7, type: 'normal', angle: -4.5, name: 'C-038' },

  { x: -29.4, y: 1.9, type: 'normal', angle: 76, name: 'C-039' },
  { x: -28.45, y: 1.66, type: 'normal', angle: 76, name: 'C-040' },
  { x: -27, y: 1.3, type: 'normal', angle: 76, name: 'C-041' },
  { x: -26.05, y: 1.06, type: 'normal', angle: 76, name: 'C-042' },
  { x: -25.1, y: 0.82, type: 'normal', angle: 76, name: 'C-043' },
  { x: -24.14, y: 0.57, type: 'normal', angle: 76, name: 'C-044' },

  { x: -21.3, y: -0.15, type: 'normal', angle: 74, name: 'C-045' },
  { x: -20.37, y: -0.42, type: 'normal', angle: 74, name: 'C-046' },

  { x: -21.87, y: 0.49, type: 'mini', angle: 74, name: 'M-14' },
  { x: -22.32, y: 0.63, type: 'mini', angle: 74, name: 'M-13' },
  { x: -22.77, y: 0.77, type: 'mini', angle: 74, name: 'M-12' },

  { x: -7.7, y: -4.93, type: 'mini', angle: -17, name: 'M-24' },
  { x: -8.8, y: -4.57, type: 'mini', angle: -17, name: 'M-23' },

  { x: 15, y: -13.8, type: 'normal', angle: -30, name: 'V-018' },
  { x: 15.5, y: -12.95, type: 'normal', angle: -30, name: 'V-019' },
  //{x:28.8,y:-13,type:'mini',angle:0,name:'qwe'},
];
const vertices = [
  {
    //0
    entryLabel: '1',
    x: -18.1,
    y: -0.3,
    neighbours: [1],
  },
  {
    //1
    x: -19.5,
    y: -0.3,
    neighbours: [0, 2, 31],
  },
  {
    //2
    x: -19.2,
    y: 1,
    neighbours: [1, 3, 5, 13, 15, 17],
  },
  {
    //3
    x: -18.5,
    y: 1.8,
    neighbours: [2, 4],
  },
  {
    //4
    x: -18.5,
    y: 8.6,
    neighbours: [3, 6, 7, 8],
  },
  {
    //5
    x: -29.3,
    y: 3.4,
    neighbours: [2, 12],
  },
  {
    //6
    x: -23.8,
    y: 8.6,
    neighbours: [4],
  },
  {
    //7
    x: 20.7,
    y: 8.6,
    neighbours: [4, 9],
  },
  {
    //8
    x: 26.7,
    y: 8.6,
    neighbours: [4, 10, 11],
  },
  {
    //9
    x: 20.7,
    y: -7.8,
    neighbours: [7, 10],
  },
  {
    //10
    x: 26.7,
    y: -7.5,
    neighbours: [7, 9],
  },
  {
    //11
    x: 26.7,
    y: -9.1,
    neighbours: [7],
  },
  {
    //12
    x: -29.2,
    y: 4.4,
    neighbours: [5],
  },
  {
    //13
    x: -26,
    y: 2.6,
    neighbours: [2, 14],
  },
  {
    //14
    x: -25.9,
    y: 5,
    neighbours: [13],
  },
  {
    //15
    x: -23.75,
    y: 2.05,
    neighbours: [2, 16],
  },
  {
    //16
    x: -23.75,
    y: 4.7,
    neighbours: [15],
  },
  {
    //17
    x: -15.5,
    y: 1,
    neighbours: [2, 18],
  },
  {
    //18
    x: -15.1,
    y: 2.8,
    neighbours: [17, 19, 20, 30],
  },
  {
    //19
    x: -8.8,
    y: 2.8,
    neighbours: [18, 21, 32],
  },
  {
    //20
    x: 14.35,
    y: 2.8,
    neighbours: [18, 22],
  },
  {
    //21
    x: -8.8,
    y: -3.8,
    neighbours: [19, 23, 24],
  },
  {
    //22
    x: 14.35,
    y: -1.6,
    neighbours: [20],
  },
  {
    //23
    x: 9,
    y: -3.8,
    neighbours: [21, 25],
  },
  {
    //24
    x: 15.8,
    y: -3.8,
    neighbours: [21, 26],
  },
  {
    //25
    x: 9,
    y: -10,
    neighbours: [23, 27, 28],
  },
  {
    //26
    x: 15.8,
    y: -1.6,
    neighbours: [24],
  },
  {
    //27
    x: 11.7,
    y: -11.2,
    neighbours: [25],
  },
  {
    //28
    x: 13.8,
    y: -12.4,
    neighbours: [25],
  },
  {
    //29
    x: 23.25,
    y: -110.2,
    neighbours: [],
  },
  {
    //30
    x: 16.8,
    y: 2.8,
    neighbours: [18],
  },
  {
    //31
    x: -20,
    y: 2.5,
    neighbours: [1],
  },
  {
    //32
    x: -8.8,
    y: -2.8,
    neighbours: [19, 33],
  },
  {
    //33
    x: -6.8,
    y: -2.8,
    neighbours: [32],
  },

  // {
  //     x:-18.1,y:-0.3,
  //     neighbours:[1,2,3]
  // },
  // {
  //     x:-18.45,y:2,
  //     neighbours:[0,4,32,35]
  // },
  // {
  //     x:-15.8,y:0.2,
  //     neighbours:[0,5]
  // },
  // {
  //     x:-12.6,y:-3.3,
  //     neighbours:[0,10]
  // },
  // {
  //     x:-18.45,y:8.6,
  //     neighbours:[1,11,31]
  // },
  // {
  //     x:-15.2,y:2.2,
  //     neighbours:[2,36]
  // },
  // {
  //     x:-9.6,y:2.75,
  //     neighbours:[36,7,10]
  // },
  // {
  //     x:-5.3,y:2.75,
  //     neighbours:[6,8,11]
  // },
  // {
  //     x:0.1,y:2.75,
  //     neighbours:[7,9,28]
  // },
  // {
  //     x:-0.3,y:-3.3,
  //     neighbours:[8,10,12]
  // },
  // {
  //     x:-10,y:-3.3,
  //     neighbours:[3,6,9]
  // },
  // {
  //     x:-5.3,y:8.6,
  //     neighbours:[4,7,33]
  // },
  // {
  //     x:3.9,y:-4.4,
  //     neighbours:[9,13,14]
  // },
  // {
  //     x:8.2,y:-4.4,
  //     neighbours:[12,14,30]
  // },
  // {
  //     x:8.2,y:-3.2,
  //     neighbours:[12,13,15,37]
  // },
  // {
  //     x:13.7,y:-3.2,
  //     neighbours:[14,16,19,28]
  // },
  // {
  //     x:15.5,y:-3.2,
  //     neighbours:[15,17,19]
  // },
  // {
  //     x:15.5,y:-11.5,
  //     neighbours:[16,18,30]
  // },
  // {
  //     x:24.2,y:-11.5,
  //     neighbours:[17,22,38]
  // },
  // {
  //     x:15.5,y:-0.7,
  //     neighbours:[15,16,20]
  // },
  // {
  //     x:20.6,y:-0.7,
  //     neighbours:[19,21,26,33]
  // },
  // {
  //     x:20.6,y:-7.4,
  //     neighbours:[20,22]
  // },
  // {
  //     x:24.2,y:-7.4,
  //     neighbours:[18,21,23]
  // },
  // {
  //     x:26.5,y:-7.4,
  //     neighbours:[22,24,38]
  // },
  // {
  //     x:26.5,y:-1.5,
  //     neighbours:[23,25,26]
  // },
  // {
  //     x:26.5,y:8.6,
  //     neighbours:[24,33]
  // },
  // {
  //     x:21.3,y:-1.5,
  //     neighbours:[20,24]
  // },
  // {
  //     x:13.7,y:-12.4,
  //     neighbours:[30]
  // },
  // {
  //     x:13.7,y:2.75,
  //     neighbours:[8,15,29]
  // },
  // {
  //     x:16.7,y:2.75,
  //     neighbours:[28]
  // },
  // {
  //     x:9,y:-10,
  //     neighbours:[13,27]
  // },
  // {
  //     x:-23.9,y:8.6,
  //     neighbours:[4,32,39]
  // },
  // {
  //     x:-23.9,y:2.7,
  //     neighbours:[1,31,34,35,39]
  // },
  // {
  //     x:20.6,y:8.7,
  //     neighbours:[11,20,25]
  // },
  // {
  //     x:-29.5,y:4,
  //     neighbours:[32,39]
  // },
  // {
  //     x:-21,y:2,
  //     neighbours:[32,1]
  // },
  // {
  //     x:-11,y:2.2,
  //     neighbours:[5,6]
  // },
  // {
  //     x:8,y:-2.2,
  //     neighbours:[14]
  // },
  // {
  //     x:26.5,y:-9,
  //     neighbours:[23,18]
  // },
  // {
  //     x:-25.5,y:4.5,
  //     neighbours:[31,32,34]
  // },
];
const floorData = {
  name: 'B3',
  params: {},
  objects: objects,
  vertices: vertices,
};
export default floorData;
