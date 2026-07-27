import { svgData } from '@/data/floors/3Fcode';

const objects = [
  { x: -21.4, y: -24.0, type: 'normal', angle: 90, name: 'A-014' },
  { x: -20.4, y: -24.0, type: 'normal', angle: 90, name: 'A-015' },
  { x: -19.4, y: -24.0, type: 'normal', angle: 90, name: 'A-016' },
  { x: -18.4, y: -24, type: 'normal', angle: 90, name: 'A-017' },
  { x: -17.4, y: -24, type: 'normal', angle: 90, name: 'A-018' },
  { x: -16.4, y: -24, type: 'normal', angle: 90, name: 'A-019' },
  { x: -15.4, y: -24, type: 'normal', angle: 90, name: 'A-020' },
  { x: -14.4, y: -24, type: 'normal', angle: 90, name: 'A-021' },
  { x: -13.4, y: -24, type: 'normal', angle: 90, name: 'A-022' },
  { x: -12.4, y: -24, type: 'normal', angle: 90, name: 'A-023' },
  { x: -10.4, y: -24, type: 'normal', angle: 90, name: 'A-024' },
  { x: -9.4, y: -24, type: 'normal', angle: 90, name: 'A-025' },
  { x: -8.4, y: -24, type: 'normal', angle: 90, name: 'A-026' },
  { x: -7.4, y: -24, type: 'normal', angle: 90, name: 'A-027' },
  { x: -6.4, y: -24, type: 'normal', angle: 90, name: 'A-028' },
  { x: -5.4, y: -24, type: 'normal', angle: 90, name: 'A-029' },
  { x: -4.4, y: -24, type: 'normal', angle: 90, name: 'A-030' },
  { x: -3.4, y: -24, type: 'normal', angle: 90, name: 'A-031' },
  { x: -2.4, y: -24, type: 'normal', angle: 90, name: 'A-032' },
  { x: -1.4, y: -24, type: 'normal', angle: 90, name: 'A-033' },
  { x: -0.4, y: -24, type: 'normal', angle: 90, name: 'A-034' },
  { x: 0.6, y: -24, type: 'normal', angle: 90, name: 'A-035' },
  { x: 1.6, y: -24, type: 'normal', angle: 90, name: 'A-036' },
  { x: 2.6, y: -24, type: 'normal', angle: 90, name: 'A-037' },
  { x: 3.6, y: -24, type: 'normal', angle: 90, name: 'A-038' },
  { x: 4.6, y: -24, type: 'normal', angle: 90, name: 'A-039' },
  { x: 5.6, y: -24, type: 'normal', angle: 90, name: 'A-040' },
  { x: 6.6, y: -24, type: 'normal', angle: 90, name: 'A-041' },
  { x: 7.6, y: -24, type: 'normal', angle: 90, name: 'A-042' },
  { x: -23.3, y: -22.2, type: 'normal', angle: 0, name: 'A-013' },
  { x: -23.3, y: -21.2, type: 'normal', angle: 0, name: 'A-012' },
  { x: -23.3, y: -15.9, type: 'normal', angle: 0, name: 'A-007' },
  { x: -23.3, y: -16.9, type: 'normal', angle: 0, name: 'A-008' },
  { x: -23.3, y: -17.9, type: 'normal', angle: 0, name: 'A-009' },
  { x: -23.3, y: -18.9, type: 'normal', angle: 0, name: 'A-010' },
  { x: -23.3, y: -19.9, type: 'normal', angle: 0, name: 'A-011' },
  { x: -21.9, y: -13.4, type: 'normal', angle: 90, name: 'A-006' },
  { x: -20.9, y: -13.4, type: 'normal', angle: 90, name: 'A-005' },
  { x: -19.9, y: -13.4, type: 'normal', angle: 90, name: 'A-004' },
  { x: -17.9, y: -13.4, type: 'normal', angle: 90, name: 'A-003' },
  { x: -16.9, y: -13.4, type: 'normal', angle: 90, name: 'A-002' },
  { x: -15.9, y: -13.4, type: 'normal', angle: 90, name: 'A-001' },
  { x: -6.8, y: -13.3, type: 'normal', angle: 0, name: 'A-102' },
  { x: -6.8, y: -12.3, type: 'normal', angle: 0, name: 'A-103' },
  { x: -6.8, y: -11.3, type: 'normal', angle: 0, name: 'A-104' },
  { x: -3.2, y: -11.3, type: 'normal', angle: 0, name: 'A-101' },
  { x: -3.2, y: -12.3, type: 'normal', angle: 0, name: 'A-100' },
  { x: -3.2, y: -13.3, type: 'normal', angle: 0, name: 'A-099' },
  { x: -6.8, y: -9.5, type: 'normal', angle: 0, name: 'A-105' },
  { x: -6.8, y: -7.9, type: 'normal', angle: 0, name: 'A-106' },
  { x: -1.8, y: -6.6, type: 'normal', angle: 0, name: 'A-118' },
  { x: 2.2, y: -6.6, type: 'normal', angle: 0, name: 'A-119' },
  { x: 9.3, y: -22.2, type: 'normal', angle: 0, name: 'A-043' },
  { x: 9.3, y: -21.2, type: 'normal', angle: 0, name: 'A-044' },
  { x: 9.3, y: -19.9, type: 'normal', angle: 0, name: 'A-089' },
  { x: 9.3, y: -18.9, type: 'normal', angle: 0, name: 'A-090' },
  { x: 9.3, y: -17.9, type: 'normal', angle: 0, name: 'A-091' },
  { x: 9.3, y: -16.9, type: 'normal', angle: 0, name: 'A-092' },
  { x: 9.3, y: -15.9, type: 'normal', angle: 0, name: 'A-093' },
  { x: 9.3, y: -13.9, type: 'normal', angle: 0, name: 'A-115' },
  { x: 9.3, y: -12.9, type: 'normal', angle: 0, name: 'A-116' },
  { x: 9.3, y: -11.9, type: 'normal', angle: 0, name: 'A-117' },

  { x: -19, y: -17.9, type: 'normal', angle: 0, name: 'A-064' },
  { x: -19, y: -18.9, type: 'normal', angle: 0, name: 'A-063' },
  { x: -19, y: -19.9, type: 'normal', angle: 0, name: 'A-062' },
  { x: -17.4, y: -20.0, type: 'normal', angle: 90, name: 'A-061' },
  { x: -16.4, y: -20.0, type: 'normal', angle: 90, name: 'A-060' },
  { x: -17.4, y: -17.8, type: 'normal', angle: 90, name: 'A-065' },
  { x: -16.4, y: -17.8, type: 'normal', angle: 90, name: 'A-066' },
  { x: -15.4, y: -17.8, type: 'normal', angle: 90, name: 'A-067' },
  { x: -14.4, y: -17.8, type: 'normal', angle: 90, name: 'A-068' },
  { x: -13.4, y: -17.8, type: 'normal', angle: 90, name: 'A-069' },
  { x: -12.4, y: -17.8, type: 'normal', angle: 90, name: 'A-070' },
  { x: -11.4, y: -17.8, type: 'normal', angle: 90, name: 'A-071' },
  { x: -10.4, y: -17.8, type: 'normal', angle: 90, name: 'A-072' },
  { x: -9.4, y: -17.8, type: 'normal', angle: 90, name: 'A-073' },
  { x: -8.2, y: -17.8, type: 'normal', angle: 90, name: 'A-074' },
  { x: -6.6, y: -17.8, type: 'normal', angle: 90, name: 'A-075' },
  { x: -5.4, y: -17.8, type: 'normal', angle: 90, name: 'A-076' },
  { x: -4.4, y: -17.8, type: 'normal', angle: 90, name: 'A-077' },
  { x: -3.4, y: -17.8, type: 'normal', angle: 90, name: 'A-078' },
  { x: -2.4, y: -17.8, type: 'normal', angle: 90, name: 'A-079' },
  { x: -1.4, y: -17.8, type: 'normal', angle: 90, name: 'A-080' },
  { x: -0.4, y: -17.8, type: 'normal', angle: 90, name: 'A-081' },
  { x: 0.6, y: -17.8, type: 'normal', angle: 90, name: 'A-082' },
  { x: 1.6, y: -17.8, type: 'normal', angle: 90, name: 'A-083' },
  { x: 2.6, y: -17.8, type: 'normal', angle: 90, name: 'A-084' },
  { x: 3.6, y: -17.8, type: 'normal', angle: 90, name: 'A-085' },
  { x: 3.6, y: -19.9, type: 'normal', angle: 90, name: 'A-045' },
  { x: 2.6, y: -19.9, type: 'normal', angle: 90, name: 'A-046' },
  { x: 1.6, y: -19.9, type: 'normal', angle: 90, name: 'A-047' },
  { x: -0.4, y: -19.9, type: 'normal', angle: 90, name: 'A-048' },
  { x: -1.4, y: -19.9, type: 'normal', angle: 90, name: 'A-049' },
  { x: -2.4, y: -19.9, type: 'normal', angle: 90, name: 'A-050' },
  { x: -4.4, y: -19.9, type: 'normal', angle: 90, name: 'A-051' },
  { x: -5.4, y: -19.9, type: 'normal', angle: 90, name: 'A-052' },
  { x: -6.4, y: -19.9, type: 'normal', angle: 90, name: 'A-053' },
  { x: -8.4, y: -19.9, type: 'normal', angle: 90, name: 'A-054' },
  { x: -9.4, y: -19.9, type: 'normal', angle: 90, name: 'A-055' },
  { x: -10.4, y: -19.9, type: 'normal', angle: 90, name: 'A-056' },
  { x: -11.8, y: -19.9, type: 'normal', angle: 90, name: 'A-057' },
  { x: -12.8, y: -19.9, type: 'normal', angle: 90, name: 'A-058' },
  { x: -13.8, y: -19.9, type: 'normal', angle: 90, name: 'A-059' },

  { x: 5.2, y: -17.9, type: 'normal', angle: 0, name: 'A-086' },
  { x: 5.2, y: -18.9, type: 'normal', angle: 0, name: 'A-087' },
  { x: 5.2, y: -19.9, type: 'normal', angle: 0, name: 'A-088' },
  { x: 5.2, y: -13.3, type: 'normal', angle: 0, name: 'A-114' },
  { x: 5.2, y: -12.3, type: 'normal', angle: 0, name: 'A-113' },
  { x: 5.2, y: -11.3, type: 'normal', angle: 0, name: 'A-112' },
  { x: 3.2, y: -11.0, type: 'normal', angle: 90, name: 'A-111' },
  { x: 2.2, y: -11.0, type: 'normal', angle: 90, name: 'A-110' },
  { x: 1.2, y: -11.0, type: 'normal', angle: 90, name: 'A-109' },
  { x: 1.2, y: -13.8, type: 'normal', angle: 90, name: 'A-096' },
  { x: 2.2, y: -13.8, type: 'normal', angle: 90, name: 'A-095' },
  { x: 3.2, y: -13.8, type: 'normal', angle: 90, name: 'A-094' },
  { x: -0.3, y: -11.0, type: 'normal', angle: 90, name: 'A-108' },
  { x: -1.3, y: -11.0, type: 'normal', angle: 90, name: 'A-107' },
  { x: -1.3, y: -13.8, type: 'normal', angle: 90, name: 'A-098' },
  { x: -0.3, y: -13.8, type: 'normal', angle: 90, name: 'A-097' },
  { x: 10.9, y: -11.3, type: 'normal', angle: 90, name: 'B-120' },
  { x: 11.9, y: -11.3, type: 'normal', angle: 90, name: 'B-121' },
  { x: 13.4, y: -11.3, type: 'normal', angle: 90, name: 'B-122' },
  { x: 14.4, y: -11.3, type: 'normal', angle: 90, name: 'B-123' },
  { x: 15.4, y: -11.3, type: 'normal', angle: 90, name: 'B-124' },
  { x: 19.8, y: -11.3, type: 'normal', angle: 90, name: 'B-127' },
  { x: 22.3, y: -11.7, type: 'normal', angle: 90, name: 'B-185' },
  { x: 24.0, y: -12.8, type: 'normal', angle: 0, name: 'B-184' },
  { x: 24.0, y: -13.8, type: 'normal', angle: 0, name: 'B-183' },
  { x: 24.0, y: -15.9, type: 'normal', angle: 0, name: 'B-182' },
  { x: 24.0, y: -16.9, type: 'normal', angle: 0, name: 'B-181' },
  { x: 24.0, y: -17.9, type: 'normal', angle: 0, name: 'B-180' },
  { x: 24.0, y: -18.9, type: 'normal', angle: 0, name: 'B-179' },
  { x: 24.0, y: -19.9, type: 'normal', angle: 0, name: 'B-178' },
  { x: 28.6, y: -19.9, type: 'normal', angle: 0, name: 'B-140' },
  { x: 30.7, y: -20.3, type: 'normal', angle: 90, name: 'B-141' },
  { x: 31.7, y: -20.3, type: 'normal', angle: 90, name: 'C-142' },
  { x: 28.6, y: -18.9, type: 'normal', angle: 0, name: 'B-139' },
  { x: 28.6, y: -17.9, type: 'normal', angle: 0, name: 'B-138' },
  { x: 28.6, y: -16.3, type: 'normal', angle: 0, name: 'B-137' },
  { x: 28.6, y: -15.3, type: 'normal', angle: 0, name: 'B-136' },
  { x: 28.6, y: -13.8, type: 'normal', angle: 0, name: 'B-135' },
  { x: 28.6, y: -12.8, type: 'normal', angle: 0, name: 'B-134' },
  { x: 28.6, y: -11.8, type: 'normal', angle: 0, name: 'B-133' },
  { x: 28.6, y: -10.8, type: 'normal', angle: 0, name: 'B-132' },
  { x: 28.6, y: -9.8, type: 'normal', angle: 0, name: 'B-131' },
  { x: 24.0, y: -21.5, type: 'normal', angle: 0, name: 'B-177' },
  { x: 24.0, y: -22.5, type: 'normal', angle: 0, name: 'B-176' },
  { x: 18.8, y: -11.3, type: 'normal', angle: 90, name: 'B-126' },
  { x: 17.8, y: -11.3, type: 'normal', angle: 90, name: 'B-125' },
  { x: 18.7, y: -7.2, type: 'normal', angle: 0, name: 'B-128' },
  { x: 22.3, y: -7.4, type: 'normal', angle: -17, name: 'B-129' },
  { x: 25.3, y: -8.35, type: 'normal', angle: -17, name: 'B-130' },
  { x: 25.6, y: -24.6, type: 'normal', angle: 90, name: 'B-175' },
  { x: 26.6, y: -24.6, type: 'normal', angle: 90, name: 'B-174' },
  { x: 27.6, y: -24.6, type: 'normal', angle: 90, name: 'B-173' },
  { x: 28.6, y: -24.6, type: 'normal', angle: 90, name: 'B-172' },
  { x: 29.6, y: -24.6, type: 'normal', angle: 90, name: 'B-171' },
  { x: 30.6, y: -24.6, type: 'normal', angle: 90, name: 'B-170' },
  { x: 31.6, y: -24.6, type: 'normal', angle: 90, name: 'B-169' },
  { x: 32.6, y: -24.6, type: 'normal', angle: 90, name: 'B-168' },
  { x: 33.6, y: -24.6, type: 'normal', angle: 90, name: 'B-167' },
  { x: 34.6, y: -24.6, type: 'normal', angle: 90, name: 'B-166' },
  { x: 35.6, y: -24.6, type: 'normal', angle: 90, name: 'B-165' },
  { x: 36.6, y: -24.6, type: 'normal', angle: 90, name: 'B-164' },
  { x: 37.6, y: -24.6, type: 'normal', angle: 90, name: 'B-163' },
  { x: 38.6, y: -24.6, type: 'normal', angle: 90, name: 'B-162' },
  { x: 39.6, y: -24.6, type: 'normal', angle: 90, name: 'B-161' },
  { x: 40.6, y: -24.6, type: 'normal', angle: 90, name: 'B-160' },
  { x: 41.6, y: -24.8, type: 'normal', angle: 90, name: 'B-159' },
  { x: 42.6, y: -24.8, type: 'normal', angle: 90, name: 'B-158' },
  { x: 50.5, y: -24.8, type: 'normal', angle: 90, name: 'B-155' },
  { x: 51.5, y: -25.2, type: 'normal', angle: 90, name: 'B-154' },
  { x: 51.9, y: -26.9, type: 'normal', angle: 0, name: 'C-222' },
  { x: 51.9, y: -27.9, type: 'normal', angle: 0, name: 'C-221' },
  { x: 51.9, y: -29.7, type: 'normal', angle: 0, name: 'C-220' },
  { x: 51.9, y: -30.7, type: 'normal', angle: 0, name: 'C-219' },
  { x: 51.9, y: -31.7, type: 'normal', angle: 0, name: 'C-218' },
  { x: 53.8, y: -33.1, type: 'normal', angle: 90, name: 'C-217' },
  { x: 54.8, y: -33.1, type: 'normal', angle: 90, name: 'C-216' },
  { x: 55.8, y: -33.1, type: 'normal', angle: 90, name: 'C-215' },
  { x: 57.3, y: -29.3, type: 'normal', angle: 90, name: 'C-224' },
  { x: 58.3, y: -29.3, type: 'normal', angle: 90, name: 'C-225' },
  { x: 59.3, y: -29.3, type: 'normal', angle: 90, name: 'C-226' },
  { x: 55.8, y: -29.3, type: 'normal', angle: 90, name: 'C-223' },
  { x: 56.35, y: -27.7, type: 'normal', angle: 0, name: 'C-227' },
  { x: 58.45, y: -27.1, type: 'normal', angle: 0, name: 'C-228' },
  { x: 60.85, y: -28.1, type: 'normal', angle: 67, name: 'C-229' },
  { x: 61.75, y: -28.5, type: 'normal', angle: 67, name: 'C-230' },
  { x: 62.65, y: -28.9, type: 'normal', angle: 67, name: 'C-231' },
  { x: 63.55, y: -29.3, type: 'normal', angle: 67, name: 'C-232' },
  { x: 64.45, y: -29.2, type: 'mini', angle: 67, name: 'M-03' },
  { x: 64.9, y: -29.4, type: 'mini', angle: 67, name: 'M-02' },
  { x: 65.35, y: -29.6, type: 'mini', angle: 67, name: 'M-01' },
  { x: 65.85, y: -30.3, type: 'normal', angle: 67, name: 'C-233' },
  { x: 66.75, y: -30.7, type: 'normal', angle: 67, name: 'C-234' },
  { x: 67.65, y: -31.1, type: 'normal', angle: 67, name: 'C-235' },
  { x: 57.3, y: -33.1, type: 'normal', angle: 90, name: 'C-214' },
  { x: 58.3, y: -33.1, type: 'normal', angle: 90, name: 'C-213' },
  { x: 59.3, y: -33.1, type: 'normal', angle: 90, name: 'C-212' },
  { x: 61.3, y: -33.1, type: 'normal', angle: 90, name: 'C-211' },
  { x: 62.3, y: -33.1, type: 'normal', angle: 90, name: 'C-210' },
  { x: 63.9, y: -33.9, type: 'normal', angle: 90, name: 'C-209' },
  { x: 65.9, y: -34.9, type: 'normal', angle: 90, name: 'C-208' },
  { x: 66.9, y: -34.9, type: 'normal', angle: 90, name: 'C-207' },
  { x: 67.9, y: -34.9, type: 'normal', angle: 90, name: 'C-206' },
  { x: 68.9, y: -34.9, type: 'normal', angle: 90, name: 'C-205' },
  { x: 69.9, y: -34.9, type: 'normal', angle: 90, name: 'C-204' },
  { x: 71.6, y: -33.9, type: 'normal', angle: -30, name: 'C-203' },
  { x: 72.1, y: -32.5, type: 'normal', angle: -13, name: 'C-202' },
  { x: 72.7, y: -30.9, type: 'normal', angle: -13, name: 'C-201' },
  { x: 72.9, y: -29.9, type: 'normal', angle: -13, name: 'C-200' },
  { x: 65.9, y: -25.47, type: 'normal', angle: 67.5, name: 'C-194' },
  { x: 66.8, y: -25.83, type: 'normal', angle: 67.5, name: 'C-195' },
  { x: 67.7, y: -26.2, type: 'normal', angle: 67.5, name: 'C-196' },
  { x: 61.75, y: -23.79, type: 'normal', angle: 67.5, name: 'C-191' },
  { x: 62.65, y: -24.15, type: 'normal', angle: 67.5, name: 'C-192' },
  { x: 63.55, y: -24.51, type: 'normal', angle: 67.5, name: 'C-193' },
  { x: 58.65, y: -23.15, type: 'normal', angle: 67.5, name: 'C-190' },
  { x: 57.75, y: -22.79, type: 'normal', angle: 67.5, name: 'C-189' },
  { x: 53.65, y: -21.1, type: 'normal', angle: 67.5, name: 'C-186' },
  { x: 54.55, y: -21.46, type: 'normal', angle: 67.5, name: 'C-187' },
  { x: 55.45, y: -21.82, type: 'normal', angle: 67.5, name: 'C-188' },
  { x: 50.45, y: -20.25, type: 'normal', angle: 68, name: 'B-153' },
  { x: 49.55, y: -19.9, type: 'normal', angle: 68, name: 'B-152' },
  { x: 45.6, y: -18.25, type: 'normal', angle: 68, name: 'B-149' },
  { x: 46.5, y: -18.6, type: 'normal', angle: 68, name: 'B-150' },
  { x: 47.4, y: -18.95, type: 'normal', angle: 68, name: 'B-151' },
  { x: 41.85, y: -16.7, type: 'normal', angle: 68, name: 'B-147' },
  { x: 42.75, y: -17.05, type: 'normal', angle: 68, name: 'B-148' },
  { x: 39.6, y: -17.4, type: 'normal', angle: -23, name: 'B-136' },
  { x: 39.2, y: -18.35, type: 'normal', angle: -23, name: 'B-145' },
  { x: 38.4, y: -20.35, type: 'normal', angle: 90, name: 'B-143' },
  { x: 39.4, y: -20.35, type: 'normal', angle: 90, name: 'B-144' },
  { x: 69.8, y: -27.1, type: 'normal', angle: 67.5, name: 'C-197' },
  { x: 70.7, y: -27.46, type: 'normal', angle: 67.5, name: 'C-198' },
  { x: 71.6, y: -27.82, type: 'normal', angle: 67.5, name: 'C-199' },
  /*{ x: 52.25, y: -24.9, type: 'mini', angle: 90, name: 'M-05' },*/

  { x: 49.75, y: -24.5, type: 'mini', angle: 90, name: 'M-04' },
  { x: 49.25, y: -24.5, type: 'mini', angle: 90, name: 'M-05' },
  { x: 48.75, y: -24.5, type: 'mini', angle: 90, name: 'M-06' },
  { x: 48.25, y: -24.5, type: 'mini', angle: 90, name: 'M-07' },
  { x: 47.3, y: -24.8, type: 'normal', angle: 90, name: 'B-156' },
  { x: 46.3, y: -24.8, type: 'normal', angle: 90, name: 'B-157' },
  { x: 45.25, y: -24.5, type: 'mini', angle: 90, name: 'M-08' },
  { x: 44.75, y: -24.5, type: 'mini', angle: 90, name: 'M-09' },
  { x: 44.25, y: -24.5, type: 'mini', angle: 90, name: 'M-10' },
  { x: 43.75, y: -24.5, type: 'mini', angle: 90, name: 'M-11' },
  { x: 37.65, y: -20.8, type: 'mini', angle: 90, name: 'M-12' },
  { x: 15.1, y: 6.6, type: 'lift', angle: 54 },
]; //парковки + лифты + терминалы
const path = {
  1: [
    { x: -5.9, y: -1.05 },
    { x: -4.9, y: -1.5 },
    { x: -4.9, y: -8.1 },
  ],
  2: [
    { x: 30.5, y: -15.1 },
    { x: 30.5, y: -17.1 },
    { x: 27.1, y: -17.1 },
  ],
  3: [
    { x: 16.3, y: -5 },
    { x: 15.1, y: -5 },
    { x: 15.1, y: -7.9 },
  ],
};
const icons = [
  {
    file: require('@/assets/kiosks_front.png'),
    width: 0.4,
    height: 1,
    position: { x: 31.6, y: -16.2 },
  },
  {
    file: require('@/assets/kiosks_back.png'),
    width: 0.4,
    height: 1,
    position: { x: 17.6, y: -6.4 },
  },
  {
    file: require('@/assets/kiosks_left.png'),
    width: 0.4,
    height: 1,
    position: { x: -4.8, y: -2.1 },
  },
  /*  {
      file: require('@/assets/escalator.png'),
      width: 1.2,
      height: 1,
      position: { x: -7.8, y: -4.8 },
    },*/
];
const texts = [
  { name: 'Cinema', x: -18.1, y: 8.1 },
  { name: '301', x: -7.1, y: 15.1 },
  { name: '302', x: -2.1, y: 15.1 },
  { name: '303', x: 1.1, y: 15.1 },
  { name: '304', x: 4.1, y: 15.1 },
  { name: '305', x: 8.1, y: 12.1 },
  { name: '306', x: 10.5, y: 10.9 },
  { name: '307', x: 12.3, y: 9.2 },
  { name: '309', x: 12.1, y: -3.8 },
  { name: '310-313', x: 11.5, y: 2.4 },
  /*  { name: '311', x: 12.6, y: 2.4 },
    { name: '312', x: 11.1, y: 4.3 },
    { name: '313', x: 9.6, y: 1.3 },*/
  { name: '314', x: 6.9, y: -0.3 },
  { name: '315', x: 4.7, y: -0.3 },
  { name: '316', x: 1.6, y: 0.3 },
  { name: '317', x: -1.6, y: 3.1 },
  { name: '318', x: -6.6, y: 5.1 },
  /*  { name: '308 (F&B)', x: 19.6, y: 3.4 },*/
  { name: '308 Supermarket', x: 30.6, y: -6.4 },
]; //подписи не на местах
const vertices = [
  {
    //0
    x: -5.3,
    y: -3.8,
    neighbours: [],
  },
  {
    //1
    x: -4.9,
    y: -3.8,
    neighbours: [],
  },
  {
    //2
    x: -4.9,
    y: -8.1,
    neighbours: [12],

    entryLabel: '1',
  },
  {
    //3
    x: -4.9,
    y: -15.5,
    neighbours: [4, 5, 9, 12],
  },
  {
    //4
    x: -22.1,
    y: -15.1,
    neighbours: [3, 5],
  },
  {
    //5
    x: -20.8,
    y: -15.5,
    neighbours: [3, 6, 4],
  },
  {
    //6
    x: -20.8,
    y: -21.9,
    neighbours: [5, 7, 8],
  },
  {
    //7
    x: -21.8,
    y: -22.9,
    neighbours: [6],
  },
  {
    //8
    x: 7.1,
    y: -21.9,
    neighbours: [6, 9, 10, 11],
  },
  {
    //9
    x: 7.1,
    y: -15.5,
    neighbours: [3, 8, 11],
  },
  {
    //10
    x: 8.4,
    y: -22.9,
    neighbours: [8],
  },
  {
    //11
    x: 7.1,
    y: -8.9,
    neighbours: [9, 12, 8, 36],
  },
  {
    //12
    x: -4.9,
    y: -8.9,
    neighbours: [11, 2, 3],
  },
  {
    //13
    x: 20.1,
    y: -8.9,
    neighbours: [14, 19, 36],
  },
  {
    //14
    x: 26.1,
    y: -10.5,
    neighbours: [13, 18, 40, 19],
  },
  {
    //15
    x: 26.1,
    y: -22.6,
    neighbours: [16, 17, 20, 40],
  },
  {
    //16
    x: 51.1,
    y: -22.6,
    neighbours: [15, 20, 24],
  },
  {
    //17
    x: 25.8,
    y: -23.6,
    neighbours: [15],
  },
  {
    //18
    x: 27.5,
    y: -9.5,
    neighbours: [14],
  },

  {
    //19
    x: 22.6,
    y: -8.4,
    neighbours: [14, 13],
  },
  {
    //20
    x: 42.1,
    y: -22.6,
    neighbours: [21, 15, 16, 22, 23],
  },

  {
    //21
    x: 41.1,
    y: -18.4,
    neighbours: [20],
  },
  {
    //22
    x: 47.1,
    y: -22.6,
    neighbours: [20, 22],
  },
  {
    //23
    x: 46.1,
    y: -20.1,
    neighbours: [20],
  },
  {
    //24
    x: 54.5,
    y: -23.8,
    neighbours: [16, 25, 31, 32, 35],
  },

  {
    //25
    x: 54.5,
    y: -31.4,
    neighbours: [24, 26, 30],
  },
  {
    //26
    x: 64.5,
    y: -31.4,
    neighbours: [25, 27],
  },
  {
    //27
    x: 66.5,
    y: -33.4,
    neighbours: [26, 28],
  },
  {
    //28
    x: 70.1,
    y: -33.4,
    neighbours: [27, 29],
  },
  {
    //29
    x: 70.1,
    y: -29.4,
    neighbours: [28, 33, 32, 34],
  },

  {
    //30
    x: 53.5,
    y: -31.9,
    neighbours: [25],
  },
  {
    //31
    x: 58.1,
    y: -26.1,
    neighbours: [24, 32],
  },
  {
    //32
    x: 62.1,
    y: -26.6,
    neighbours: [24, 33, 29, 31],
  },

  {
    //33
    x: 66.1,
    y: -27.9,
    neighbours: [32, 29],
  },

  {
    //34
    x: 71.6,
    y: -29.6,
    neighbours: [29],
  },
  {
    //35
    x: 58.1,
    y: -24.7,
    neighbours: [24],
  },
  {
    //36
    x: 15.1,
    y: -8.9,
    neighbours: [37, 38, 11, 39, 13],
  },
  {
    //37
    x: 15.1,
    y: -7.9,
    neighbours: [36],
    entryLabel: '3',
  },
  {
    //38
    x: 11.1,
    y: -8.9,
    neighbours: [36],
  },
  {
    //39
    x: 18.1,
    y: -8.9,
    neighbours: [36],
  },
  {
    //40
    x: 26.1,
    y: -17.1,
    neighbours: [14, 15, 41],
  },
  {
    x: 27.1,
    y: -17.1,
    neighbours: [40],
    entryLabel: '2',
  },
  /*
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
      },*/
];
const floorData = {
  name: '3F',
  params: {
    path: svgData,
    type: 'svg',
    scale: 0.0525,
    offsetX: -48.1,
    offsetY: -35.6,
    multipleStart: true,
  },
  objects: objects,
  vertices: vertices,
  texts: texts,
  path: path,
  icons: icons,
};
export default floorData;
