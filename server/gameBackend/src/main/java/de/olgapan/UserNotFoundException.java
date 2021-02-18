package de.olgapan;


public class UserNotFoundException extends RuntimeException {
    UserNotFoundException(Long id) {
        super("Could not find player " + id);
    }
}
