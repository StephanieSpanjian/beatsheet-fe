enum CameraAngle {
  CLOSE_UP_SHOT = 'Close up shot',
  LOW_ANGLE_SHOT = 'Low angle shot',
  MEDIUM_SHOT = 'Medium shot',
  POV_SHOT = 'Point of view shot',
  WIDE_SHOT = 'Wide shot',
}

export type Beat = {
  id: string
  name: string
  time: string
  content: string
  cameraAngle: CameraAngle
  // | 'Close up shot'
  // | 'Low angle shot'
  // | 'Medium shot'
  // | 'Point of view shot'
  // | 'Wide shot'
  notes: string
}
