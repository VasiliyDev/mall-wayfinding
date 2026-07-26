const objects = [
  { x: -8.8, y: 10.8, type: 'lift' },
  { x: -18.1, y: -0.3, type: 'lift' },
  { x: 13, y: -7.3, z: 0.3, type: 'lift' },
  { x: 26.35, y: 10.8, type: 'normal', angle: 90, name: 'C-001' },
  { x: 25.35, y: 10.8, type: 'normal', angle: 90, name: 'C-002' },
  { x: 24.35, y: 10.8, type: 'normal', angle: 90, name: 'C-003' },
  { x: 23.35, y: 10.8, type: 'normal', angle: 90, name: 'C-004' },
  { x: 22.35, y: 10.8, type: 'normal', angle: 90, name: 'C-005' },

  { x: -23.6, y: 10.8, type: 'normal', angle: 90, name: 'C-036' },
  { x: -22.6, y: 10.8, type: 'normal', angle: 90, name: 'C-035' },

  { x: -22.6, y: 7.0, type: 'normal', angle: 90, name: 'C-037' },
  { x: -21.6, y: 7.0, type: 'normal', angle: 90, name: 'C-038' },
  { x: -20.6, y: 7.0, type: 'normal', angle: 90, name: 'C-039' },
  { x: -19.6, y: 7.0, type: 'normal', angle: 90, name: 'C-040' },
  { x: -18.6, y: 7.0, type: 'normal', angle: 90, name: 'C-041' },
  { x: -17.6, y: 7.0, type: 'normal', angle: 90, name: 'C-042' },
  { x: -16.6, y: 7.0, type: 'normal', angle: 90, name: 'C-043' },
  { x: -15.6, y: 7.0, type: 'normal', angle: 90, name: 'C-044' },
  { x: -14.6, y: 7.0, type: 'normal', angle: 90, name: 'C-045' },
  { x: -13.6, y: 7.0, type: 'normal', angle: 90, name: 'C-046' },
  { x: -12.6, y: 7.0, type: 'normal', angle: 90, name: 'C-047' },
  { x: -11.6, y: 7.0, type: 'normal', angle: 90, name: 'C-048' },

  { x: -10.2, y: 7.0, type: 'normal', angle: 90, name: 'C-049' },
  { x: -9.2, y: 7.0, type: 'normal', angle: 90, name: 'C-050' },
  { x: -8.2, y: 7.0, type: 'normal', angle: 90, name: 'C-051' },
  { x: -7.2, y: 7.0, type: 'normal', angle: 90, name: 'C-052' },
  { x: -6.2, y: 7.0, type: 'normal', angle: 90, name: 'C-053' },
  { x: -5.2, y: 7.0, type: 'normal', angle: 90, name: 'C-054' },
  { x: -4.2, y: 7.0, type: 'normal', angle: 90, name: 'C-055' },
  { x: -3.2, y: 7.0, type: 'normal', angle: 90, name: 'C-056' },

  { x: -1.2, y: 7.0, type: 'normal', angle: 90, name: 'C-057' },
  { x: -0.2, y: 7.0, type: 'normal', angle: 90, name: 'C-058' },
  { x: 1.6, y: 7.0, type: 'normal', angle: 90, name: 'C-059' },
  { x: 2.6, y: 7.0, type: 'normal', angle: 90, name: 'C-060' },
  { x: 3.6, y: 7.0, type: 'normal', angle: 90, name: 'C-061' },

  { x: 5.4, y: 7.0, type: 'normal', angle: 90, name: 'C-062' },
  { x: 6.4, y: 7.0, type: 'normal', angle: 90, name: 'C-063' },
  { x: 7.8, y: 7.0, type: 'normal', angle: 90, name: 'C-064' },
  { x: 8.8, y: 7.0, type: 'normal', angle: 90, name: 'C-065' },
  { x: 9.8, y: 7.0, type: 'normal', angle: 90, name: 'C-066' },

  { x: 11.5, y: 7.0, type: 'normal', angle: 90, name: 'C-067' },
  { x: 13.3, y: 7.0, type: 'normal', angle: 90, name: 'C-068' },
  { x: 14.3, y: 7.0, type: 'normal', angle: 90, name: 'C-069' },
  { x: 16.1, y: 7.0, type: 'normal', angle: 90, name: 'C-070' },
  { x: 17.1, y: 7.0, type: 'normal', angle: 90, name: 'C-071' },
  { x: 18.1, y: 7.0, type: 'normal', angle: 90, name: 'C-072' },

  { x: 19.6, y: 7.0, type: 'normal', angle: 90, name: 'C-073' },
  { x: 20.6, y: 7.0, type: 'normal', angle: 90, name: 'C-074' },
  { x: 21.6, y: 7.0, type: 'normal', angle: 90, name: 'C-075' },
  { x: 22.6, y: 7.0, type: 'normal', angle: 90, name: 'C-076' },
  { x: 23.6, y: 7.0, type: 'normal', angle: 90, name: 'C-077' },

  { x: -22.6, y: 4.9, type: 'normal', angle: 90, name: 'C-119' },
  { x: -21.6, y: 4.9, type: 'normal', angle: 90, name: 'C-118' },
  { x: -20.6, y: 4.9, type: 'normal', angle: 90, name: 'C-117' },

  { x: -19.0, y: 4.9, type: 'normal', angle: 90, name: 'C-116' },
  { x: -18.0, y: 4.9, type: 'normal', angle: 90, name: 'C-115' },
  { x: -17.0, y: 4.9, type: 'normal', angle: 90, name: 'C-114' },
  { x: -16.0, y: 4.9, type: 'normal', angle: 90, name: 'C-113' },

  { x: -14.2, y: 4.9, type: 'normal', angle: 90, name: 'C-112' },
  { x: -13.2, y: 4.9, type: 'normal', angle: 90, name: 'C-111' },
  { x: -12.2, y: 4.9, type: 'normal', angle: 90, name: 'C-110' },
  { x: -11.2, y: 4.9, type: 'normal', angle: 90, name: 'C-109' },
  { x: -9.7, y: 4.9, type: 'normal', angle: 90, name: 'C-108' },
  { x: -8.7, y: 4.9, type: 'normal', angle: 90, name: 'C-107' },
  { x: -7.7, y: 4.9, type: 'normal', angle: 90, name: 'C-106' },
  { x: -6.7, y: 4.9, type: 'normal', angle: 90, name: 'C-105' },
  { x: -5.7, y: 4.9, type: 'normal', angle: 90, name: 'C-104' },

  { x: -3.8, y: 4.9, type: 'normal', angle: 90, name: 'C-103' },
  { x: -2.8, y: 4.9, type: 'normal', angle: 90, name: 'C-102' },
  { x: -1.8, y: 4.9, type: 'normal', angle: 90, name: 'C-101' },
  { x: 0.1, y: 4.9, type: 'normal', angle: 90, name: 'C-100' },
  { x: 1.1, y: 4.9, type: 'normal', angle: 90, name: 'C-099' },
  { x: 2.1, y: 4.9, type: 'normal', angle: 90, name: 'C-098' },

  { x: 2.85, y: 4.5, type: 'mini', angle: 90, name: 'M-03' },
  { x: 3.3, y: 4.5, type: 'mini', angle: 90, name: 'M-02' },
  { x: 3.75, y: 4.5, type: 'mini', angle: 90, name: 'M-01' },
  { x: 4.5, y: 4.9, type: 'normal', angle: 90, name: 'C-097' },
  { x: 5.5, y: 4.9, type: 'normal', angle: 90, name: 'C-096' },

  { x: 6.8, y: 4.9, type: 'normal', angle: 90, name: 'C-095' },
  { x: 7.8, y: 4.9, type: 'normal', angle: 90, name: 'C-094' },
  { x: 8.8, y: 4.9, type: 'normal', angle: 90, name: 'C-093' },
  { x: 9.8, y: 4.9, type: 'normal', angle: 90, name: 'C-092' },

  { x: 11.1, y: 4.9, type: 'normal', angle: 90, name: 'C-091' },
  { x: 12.1, y: 4.9, type: 'normal', angle: 90, name: 'C-090' },
  { x: 13.1, y: 4.9, type: 'normal', angle: 90, name: 'C-089' },
  { x: 14.1, y: 4.9, type: 'normal', angle: 90, name: 'C-088' },
  { x: 15.1, y: 4.9, type: 'normal', angle: 90, name: 'C-087' },
  { x: 16.1, y: 4.9, type: 'normal', angle: 90, name: 'C-086' },
  { x: 17.1, y: 4.9, type: 'normal', angle: 90, name: 'C-085' },
  { x: 18.1, y: 4.9, type: 'normal', angle: 90, name: 'C-084' },

  { x: 19.4, y: 4.9, type: 'normal', angle: 90, name: 'C-083' },
  { x: 20.4, y: 4.9, type: 'normal', angle: 90, name: 'C-082' },
  { x: 21.4, y: 4.9, type: 'normal', angle: 90, name: 'C-081' },
  { x: 22.4, y: 4.9, type: 'normal', angle: 90, name: 'C-080' },
  { x: 23.4, y: 4.9, type: 'normal', angle: 90, name: 'C-079' },
  { x: 24.4, y: 4.9, type: 'normal', angle: 90, name: 'C-078' },

  { x: -20.1, y: 10.8, type: 'normal', angle: 90, name: 'C-034' },
  { x: -18.7, y: 10.8, type: 'normal', angle: 90, name: 'C-033' },
  { x: -17.7, y: 10.8, type: 'normal', angle: 90, name: 'C-032' },
  { x: -16.7, y: 10.8, type: 'normal', angle: 90, name: 'C-031' },
  { x: -15.7, y: 10.8, type: 'normal', angle: 90, name: 'C-030' },

  { x: -14.3, y: 10.8, type: 'normal', angle: 90, name: 'C-029' },
  { x: -13.3, y: 10.8, type: 'normal', angle: 90, name: 'C-028' },
  { x: -12.3, y: 10.8, type: 'normal', angle: 90, name: 'C-027' },
  { x: -10.85, y: 10.8, type: 'normal', angle: 90, name: 'C-026' },

  { x: -5.95, y: 10.8, type: 'normal', angle: 90, name: 'C-025' },
  { x: -4.95, y: 10.8, type: 'normal', angle: 90, name: 'C-024' },
  { x: -3.25, y: 10.8, type: 'normal', angle: 90, name: 'C-023' },

  { x: -2.25, y: 10.8, type: 'normal', angle: 90, name: 'C-022' },
  { x: -0.15, y: 10.8, type: 'normal', angle: 90, name: 'C-021' },
  { x: 0.85, y: 10.8, type: 'normal', angle: 90, name: 'C-020' },

  { x: 2.95, y: 10.8, type: 'normal', angle: 90, name: 'C-019' },
  { x: 3.95, y: 10.8, type: 'normal', angle: 90, name: 'C-018' },
  { x: 7.35, y: 10.8, type: 'normal', angle: 90, name: 'C-017' },
  { x: 8.35, y: 10.8, type: 'normal', angle: 90, name: 'C-016' },
  { x: 9.35, y: 10.8, type: 'normal', angle: 90, name: 'C-015' },
  { x: 10.35, y: 10.8, type: 'normal', angle: 90, name: 'C-014' },
  { x: 11.35, y: 10.8, type: 'normal', angle: 90, name: 'C-013' },

  { x: 12.85, y: 10.8, type: 'normal', angle: 90, name: 'C-012' },
  { x: 13.85, y: 10.8, type: 'normal', angle: 90, name: 'C-011' },
  { x: 14.85, y: 10.8, type: 'normal', angle: 90, name: 'C-010' },
  { x: 15.85, y: 10.8, type: 'normal', angle: 90, name: 'C-009' },
  { x: 16.85, y: 10.8, type: 'normal', angle: 90, name: 'C-008' },
  { x: 17.85, y: 10.8, type: 'normal', angle: 90, name: 'C-007' },
  { x: 18.85, y: 10.8, type: 'normal', angle: 90, name: 'C-006' },

  { x: 27.65, y: 10.1, type: 'mini', angle: 45, name: 'M-22' },
  { x: 28.05, y: 9.7, type: 'mini', angle: 45, name: 'M-23' },
  { x: 28.45, y: 9.3, type: 'mini', angle: 45, name: 'M-24' },

  { x: 28.9, y: 7.7, type: 'normal', angle: 0, name: 'C-214' },
  { x: 28.9, y: 6.7, type: 'normal', angle: 0, name: 'C-215' },
  { x: 28.9, y: 5.7, type: 'normal', angle: 0, name: 'C-216' },
  { x: 28.9, y: 4.7, type: 'normal', angle: 0, name: 'C-217' },
  { x: 28.9, y: 3.7, type: 'normal', angle: 0, name: 'C-218' },
  { x: 28.9, y: 2.7, type: 'normal', angle: 0, name: 'C-219' },
  { x: 28.9, y: 1.7, type: 'normal', angle: 0, name: 'C-220' },
  { x: 28.9, y: 0.7, type: 'normal', angle: 0, name: 'C-221' },
  { x: 28.9, y: -0.3, type: 'normal', angle: 0, name: 'C-222' },
  { x: 28.9, y: -1.3, type: 'normal', angle: 0, name: 'C-223' },
  { x: 28.9, y: -2.3, type: 'normal', angle: 0, name: 'C-224' },
  { x: 28.9, y: -3.3, type: 'normal', angle: 0, name: 'C-225' },
  { x: 28.9, y: -4.3, type: 'normal', angle: 0, name: 'C-226' },
  { x: 28.9, y: -5.3, type: 'normal', angle: 0, name: 'C-227' },
  { x: 28.9, y: -6.3, type: 'normal', angle: 0, name: 'C-228' },
  { x: 28.9, y: -7.3, type: 'normal', angle: 0, name: 'C-229' },
  { x: 28.9, y: -8.3, type: 'normal', angle: 0, name: 'C-230' },
  { x: 28.9, y: -9.3, type: 'normal', angle: 0, name: 'C-231' },
  { x: 28.9, y: -10.3, type: 'normal', angle: 0, name: 'C-232' },

  { x: -16.2, y: -0.3, type: 'normal', angle: 90, name: 'C-137' },

  { x: -14.6, y: 0.9, type: 'normal', angle: 90, name: 'C-138' },
  { x: -13.6, y: 0.9, type: 'normal', angle: 90, name: 'C-139' },
  { x: -12.6, y: 0.9, type: 'normal', angle: 90, name: 'C-140' },
  { x: -11.6, y: 0.9, type: 'normal', angle: 90, name: 'C-141' },

  { x: -9.5, y: 0.9, type: 'normal', angle: 0, name: 'C-142' },
  { x: -9.5, y: -0.1, type: 'normal', angle: 0, name: 'C-143' },
  { x: -9.5, y: -1.1, type: 'normal', angle: 0, name: 'C-144' },
  { x: -9.15, y: -2.6, type: 'normal', angle: 30, name: 'C-145' },
  { x: -7.95, y: -3.8, type: 'normal', angle: 70, name: 'C-195' },
  { x: -6.95, y: -4.2, type: 'normal', angle: 70, name: 'C-196' },
  { x: -5.25, y: -4.85, type: 'normal', angle: 70, name: 'C-197' },
  { x: -4.35, y: -5.15, type: 'normal', angle: 70, name: 'C-198' },
  { x: -3.45, y: -5.45, type: 'normal', angle: 70, name: 'C-199' },
  { x: -2.55, y: -5.75, type: 'normal', angle: 70, name: 'C-200' },
  { x: -1.65, y: -6.05, type: 'normal', angle: 70, name: 'C-201' },
  { x: 1.25, y: -5.85, type: 'normal', angle: -5, name: 'C-202' },

  { x: 5.05, y: -6.25, type: 'normal', angle: 90, name: 'C-203' },
  { x: 6.05, y: -6.55, type: 'normal', angle: 90, name: 'C-204' },
  { x: 7.05, y: -6.55, type: 'normal', angle: 90, name: 'C-205' },

  { x: 6.8, y: -8.55, type: 'normal', angle: 0, name: 'C-263' },
  { x: 6.8, y: -9.55, type: 'normal', angle: 0, name: 'C-264' },

  { x: 8.65, y: -10.8, type: 'normal', angle: -25, name: 'C-265' },

  { x: 10.15, y: -11.8, type: 'mini', angle: -25, name: 'M-28' },
  { x: 11.25, y: -12.3, type: 'mini', angle: -25, name: 'M-27' },
  { x: 12.25, y: -12.3, type: 'mini', angle: 90, name: 'M-26' },
  { x: 12.7, y: -12.3, type: 'mini', angle: 90, name: 'M-25' },

  { x: 13.4, y: -12.5, type: 'normal', angle: 90, name: 'C-255' },
  { x: 14.4, y: -12.8, type: 'normal', angle: 90, name: 'C-254' },
  { x: 15.4, y: -12.8, type: 'normal', angle: 90, name: 'C-253' },
  { x: 16.8, y: -12.8, type: 'normal', angle: 90, name: 'C-252' },
  { x: 17.8, y: -12.8, type: 'normal', angle: 90, name: 'C-251' },
  { x: 18.8, y: -12.8, type: 'normal', angle: 90, name: 'C-250' },

  { x: 20.5, y: -12.8, type: 'normal', angle: 90, name: 'C-249' },
  { x: 21.5, y: -12.8, type: 'normal', angle: 90, name: 'C-248' },
  { x: 22.5, y: -12.8, type: 'normal', angle: 90, name: 'C-247' },
  { x: 23.5, y: -12.8, type: 'normal', angle: 90, name: 'C-246' },
  { x: 24.5, y: -12.8, type: 'normal', angle: 90, name: 'C-245' },

  { x: -18.15, y: 1.4, type: 'normal', angle: 0, name: 'C-136' },
  { x: -20.35, y: 0.9, type: 'normal', angle: 90, name: 'C-135' },
  { x: -21.35, y: 0.9, type: 'normal', angle: 90, name: 'C-134' },
  { x: -22.35, y: 0.9, type: 'normal', angle: 90, name: 'C-133' },
  { x: -23.75, y: 0.5, type: 'normal', angle: 77, name: 'C-132' },
  { x: -25.2, y: 0.85, type: 'normal', angle: 77, name: 'C-131' },
  { x: -26.5, y: 1.15, type: 'normal', angle: 77, name: 'C-130' },
  { x: -27.45, y: 1.4, type: 'normal', angle: 77, name: 'C-129' },
  { x: -28.75, y: 1.7, type: 'normal', angle: 77, name: 'C-128' },
  { x: -29.75, y: 1.95, type: 'normal', angle: 77, name: 'C-127' },

  { x: 12.1, y: -5.3, type: 'normal', angle: 90, name: 'C-206' },
  { x: 13.1, y: -5.3, type: 'normal', angle: 90, name: 'C-207' },
  { x: 14.1, y: -5.3, type: 'normal', angle: 90, name: 'C-208' },

  { x: 16.9, y: -5.3, type: 'normal', angle: 90, name: 'C-209' },
  { x: 17.9, y: -5.3, type: 'normal', angle: 90, name: 'C-210' },

  { x: 21.1, y: -5.3, type: 'normal', angle: 90, name: 'C-211' },
  { x: 22.5, y: -5.3, type: 'normal', angle: 90, name: 'C-212' },
  { x: 23.5, y: -5.3, type: 'normal', angle: 90, name: 'C-213' },
  { x: 21.65, y: -6.85, type: 'normal', angle: 0, name: 'C-240' },
  { x: 21.65, y: -7.85, type: 'normal', angle: 0, name: 'C-239' },
  { x: 21.65, y: -8.85, type: 'normal', angle: 0, name: 'C-238' },
  { x: 21.65, y: -10.3, type: 'normal', angle: 0, name: 'C-237' },
  { x: 23.2, y: -9.75, type: 'normal', angle: 90, name: 'C-236' },
  { x: 24.2, y: -9.75, type: 'normal', angle: 90, name: 'C-235' },
  { x: 24.2, y: -8.2, type: 'normal', angle: 0, name: 'C-234' },
  { x: 24.2, y: -7.2, type: 'normal', angle: 0, name: 'C-233' },
  { x: 24.65, y: -6.45, type: 'mini', angle: 0, name: 'M-21' },
  { x: 24.65, y: -5.95, type: 'mini', angle: 0, name: 'M-20' },
  { x: 24.65, y: -5.45, type: 'mini', angle: 0, name: 'M-19' },
  { x: 24.65, y: -4.95, type: 'mini', angle: 0, name: 'M-18' },

  { x: 17.4, y: -6.85, type: 'normal', angle: 0, name: 'C-241' },
  { x: 17.4, y: -7.85, type: 'normal', angle: 0, name: 'C-242' },
  { x: 17.4, y: -8.85, type: 'normal', angle: 0, name: 'C-243' },
  { x: 17.4, y: -9.85, type: 'normal', angle: 0, name: 'C-244' },

  { x: 10.55, y: -5.85, type: 'normal', angle: 0, name: 'C-262' },

  { x: 11.35, y: -4.8, type: 'mini', angle: 90, name: 'M-17' },
  { x: 10.9, y: -4.8, type: 'mini', angle: 90, name: 'M-16' },
  { x: 9.75, y: -4.8, type: 'mini', angle: 90, name: 'M-14' },
  { x: 10.2, y: -4.8, type: 'mini', angle: 90, name: 'M-15' },

  { x: 10.55, y: -6.85, type: 'normal', angle: 0, name: 'C-261' },
  { x: 10.55, y: -7.85, type: 'normal', angle: 0, name: 'C-260' },

  { x: 11.3, y: -9.45, type: 'normal', angle: 90, name: 'C-259' },
  { x: 12.3, y: -9.45, type: 'normal', angle: 90, name: 'C-258' },
  { x: 13.3, y: -9.45, type: 'normal', angle: 90, name: 'C-257' },
  { x: 14.3, y: -9.45, type: 'normal', angle: 90, name: 'C-256' },

  { x: 10.2, y: -8.65, type: 'mini', angle: 0, name: 'M-30' },
  { x: 10.2, y: -9.15, type: 'mini', angle: 0, name: 'M-29' },

  { x: 3.1, y: 0.6, type: 'normal', angle: 85, name: 'C-153' },
  { x: 2.1, y: 0.7, type: 'normal', angle: 85, name: 'C-152' },
  { x: 1.1, y: 0.8, type: 'normal', angle: 85, name: 'C-151' },
  { x: 0.35, y: 1.3, type: 'mini', angle: 85, name: 'M-08' },
  { x: -0.15, y: 1.35, type: 'mini', angle: 85, name: 'M-07' },
  { x: -1.8, y: 0.9, type: 'normal', angle: 90, name: 'C-150' },
  { x: -3.3, y: 0.9, type: 'normal', angle: 90, name: 'C-149' },
  { x: -4.3, y: 0.9, type: 'normal', angle: 90, name: 'C-148' },
  { x: -5.3, y: 0.9, type: 'normal', angle: 90, name: 'C-147' },
  { x: -6.3, y: 0.9, type: 'normal', angle: 90, name: 'C-146' },
  { x: -5.4, y: -0.65, type: 'normal', angle: 0, name: 'C-194' },
  { x: -3.75, y: -1.15, type: 'normal', angle: 70, name: 'C-193' },
  { x: -2.8, y: -1.5, type: 'normal', angle: 70, name: 'C-192' },
  { x: -1.85, y: -1.85, type: 'normal', angle: 70, name: 'C-191' },
  { x: 0.8, y: -2.4, type: 'normal', angle: 85, name: 'C-190' },
  { x: 1.8, y: -2.5, type: 'normal', angle: 85, name: 'C-189' },
  { x: 2.8, y: -2.6, type: 'normal', angle: 85, name: 'C-188' },

  { x: 10.1, y: 0.9, type: 'normal', angle: 90, name: 'C-157' },
  { x: 9.1, y: 0.9, type: 'normal', angle: 90, name: 'C-156' },
  { x: 8.1, y: 0.9, type: 'normal', angle: 90, name: 'C-155' },

  { x: 7.4, y: 1.2, type: 'mini', angle: 90, name: 'M-13' },
  { x: 6.9, y: 1.2, type: 'mini', angle: 90, name: 'M-12' },
  { x: 6.4, y: 1.2, type: 'mini', angle: 90, name: 'M-11' },
  { x: 5.5, y: 0.9, type: 'normal', angle: 90, name: 'C-154' },
  { x: 4.0, y: 0.95, type: 'mini', angle: 85, name: 'M-09' },
  { x: 4.5, y: 0.9, type: 'mini', angle: 85, name: 'M-10' },

  { x: 8.1, y: -1.2, type: 'normal', angle: 90, name: 'C-185' },
  { x: 9.1, y: -1.2, type: 'normal', angle: 90, name: 'C-184' },
  { x: 10.1, y: -1.2, type: 'normal', angle: 90, name: 'C-183' },

  { x: -28.6, y: 6.25, type: 'normal', angle: 105, name: 'C-123' },

  { x: -26.9, y: 7.25, type: 'normal', angle: 15, name: 'C-122' },
  { x: -26.2, y: 5.8, type: 'normal', angle: 105, name: 'C-120' },
  { x: -27.2, y: 5.55, type: 'normal', angle: 105, name: 'C-121' },

  { x: -29.55, y: 6, type: 'normal', angle: 105, name: 'C-124' },
  { x: -30.9, y: 4.7, type: 'normal', angle: -4.5, name: 'C-125' },
  { x: -30.98, y: 3.7, type: 'normal', angle: -4.5, name: 'C-126' },

  { x: 6.1, y: -2.3, type: 'normal', angle: 90, name: 'C-186' },
  { x: 5.1, y: -2.3, type: 'normal', angle: 90, name: 'C-187' },

  { x: 11.5, y: -1.2, type: 'normal', angle: 90, name: 'C-182' },
  { x: 12.5, y: -1.2, type: 'normal', angle: 90, name: 'C-181' },

  { x: 13.85, y: -1.2, type: 'normal', angle: 90, name: 'C-180' },
  { x: 14.85, y: -1.2, type: 'normal', angle: 90, name: 'C-179' },
  { x: 16.1, y: -1.2, type: 'normal', angle: 90, name: 'C-178' },
  { x: 17.1, y: -1.2, type: 'normal', angle: 90, name: 'C-177' },
  { x: 18.1, y: -1.2, type: 'normal', angle: 90, name: 'C-176' },

  { x: 19.65, y: -1.2, type: 'normal', angle: 90, name: 'C-175' },
  { x: 20.65, y: -1.2, type: 'normal', angle: 90, name: 'C-174' },
  { x: 21.65, y: -1.2, type: 'normal', angle: 90, name: 'C-173' },
  { x: 22.65, y: -1.2, type: 'normal', angle: 90, name: 'C-172' },

  { x: 24.4, y: -1.6, type: 'normal', angle: 0, name: 'C-171' },
  { x: 24.4, y: -0.2, type: 'normal', angle: 0, name: 'C-170' },
  { x: 24.4, y: 0.8, type: 'normal', angle: 0, name: 'C-170b' },

  { x: 11.5, y: 0.9, type: 'normal', angle: 90, name: 'C-158' },
  { x: 12.5, y: 0.9, type: 'normal', angle: 90, name: 'C-159' },

  { x: 13.85, y: 0.9, type: 'normal', angle: 90, name: 'C-160' },
  { x: 14.85, y: 0.9, type: 'normal', angle: 90, name: 'C-161' },
  { x: 16.3, y: 0.9, type: 'normal', angle: 90, name: 'C-162' },
  { x: 17.3, y: 0.9, type: 'normal', angle: 90, name: 'C-163' },
  { x: 18.3, y: 0.9, type: 'normal', angle: 90, name: 'C-164' },
  { x: 19.65, y: 0.9, type: 'normal', angle: 90, name: 'C-165' },
  { x: 20.65, y: 0.9, type: 'normal', angle: 90, name: 'C-166' },
  { x: 21.65, y: 0.9, type: 'normal', angle: 90, name: 'C-167' },
  { x: 22.65, y: 0.9, type: 'normal', angle: 90, name: 'C-168' },
];
const vertices = [
  //0
  {
    x: -18.1,
    y: -0.3,
    neighbours: [1],
  },
  //1
  {
    x: -19.5,
    y: -0.3,
    neighbours: [0, 2],
  },
  //2
  {
    x: -19.5,
    y: 2.7,
    neighbours: [1, 27, 28],
  },
  //3
  {
    x: -7.7,
    y: 2.7,
    neighbours: [9, 8, 27],
  },
  //4
  {
    x: -25.2,
    y: 7.6,
    neighbours: [5],
  },
  //5
  {
    x: -23.5,
    y: 3.8,
    neighbours: [4, 6, 26, 28],
  },
  //6
  {
    x: -23.5,
    y: 9.0,
    neighbours: [5, 7],
  },
  //7
  {
    x: 26.4,
    y: 9.1,
    neighbours: [6, 8, 23],
  },
  //8
  {
    x: 26.8,
    y: 2.7,
    neighbours: [3, 7, 20, 23],
  },
  //9
  {
    x: -7.5,
    y: -1.6,
    neighbours: [3, 10, 12],
  },
  //10
  {
    x: -1.9,
    y: -3.8,
    neighbours: [9, 11, 12, 29],
  },
  //11
  {
    x: 8.3,
    y: -4.6,
    neighbours: [10, 13, 17, 29],
  },
  //12
  {
    x: -3.6,
    y: -3.5,
    neighbours: [10, 9],
  },
  //13
  {
    x: 8.3,
    y: -9.5,
    neighbours: [11, 14],
  },
  //14
  {
    x: 11.1,
    y: -11.15,
    neighbours: [13, 15],
  },
  //15
  {
    x: 15.5,
    y: -11.15,
    neighbours: [14, 16, 19],
  },
  //16
  {
    x: 15.5,
    y: -3,
    neighbours: [15, 17, 18],
  },
  //17
  {
    x: 8.3,
    y: -3,
    neighbours: [11, 16, 25],
  },
  //18
  {
    x: 19.6,
    y: -3,
    neighbours: [16, 19, 20, 32],
  },
  //19
  {
    x: 19.6,
    y: -11.15,
    neighbours: [15, 18, 21],
  },
  //20
  {
    x: 26.8,
    y: -3,
    neighbours: [18, 8, 21, 22, 30],
  },
  //21
  {
    x: 25.5,
    y: -11.15,
    neighbours: [19, 20, 22, 31],
  },
  //22
  {
    x: 26.8,
    y: -10.5,
    neighbours: [21, 20],
  },
  //23
  {
    x: 26.8,
    y: 8.5,
    neighbours: [7, 8],
  },
  //24
  {
    x: -29.1,
    y: 4.5,
    neighbours: [26],
  },
  //25
  {
    x: 10.3,
    y: -3.5,
    neighbours: [17],
  },
  //26
  {
    x: -26,
    y: 2.7,
    neighbours: [34, 33, 28, 24, 5],
  },
  //27
  {
    x: -16.2,
    y: 2.7,
    neighbours: [2, 3, 35],
  },
  //28
  {
    x: -21.5,
    y: 2.7,
    neighbours: [2, 5],
  },
  //29
  {
    x: 2.9,
    y: -4,
    neighbours: [10, 11],
  },
  //30
  {
    x: 25.7,
    y: -3.5,
    neighbours: [20, 31, 32],
  },
  //31
  {
    x: 25.7,
    y: -9,
    neighbours: [30, 21],
  },
  //32
  {
    x: 22.5,
    y: -3.5,
    neighbours: [18, 30],
  },
  //33
  {
    x: -29.1,
    y: 3.4,
    neighbours: [26],
  },
  //34
  {
    x: -27.9,
    y: 4.7,
    neighbours: [26],
  },
  //35
  {
    x: -16.2,
    y: 1,
    neighbours: [27],
  },
];
const floorData = {
  name: 'B4',
  params: {},
  objects: objects,
  vertices: vertices,
};
export default floorData;
