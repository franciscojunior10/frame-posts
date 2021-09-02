export interface HeaderContextData {
  /**
   * Function to open and close header mobile
   */
  toggle(): void

  /**
   * Variable to check if header mobile is open or not
   */
  open: boolean
}
